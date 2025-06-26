import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../../../material';


@Component({
  selector: 'app-login',
  imports: [MATERIAL_IMPORTS,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService,
    public router: Router,
    ) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.authService.tokenSubject.next(response.token);
        this.router.navigate(['/']);
      },
      error: () => this.errorMessage = 'Invalid username or password'
    });
  }

}
