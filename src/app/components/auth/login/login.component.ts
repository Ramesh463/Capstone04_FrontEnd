import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../../../material';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  imports: [MATERIAL_IMPORTS,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';


  constructor(private authService: AuthService,
    public router: Router,
    private snack: MatSnackBar
    ) {}

   errorMessage(message: string) {
    this.snack.open(message, 'Close', {
      duration: 4000,
      panelClass: ['error-snack']
    });
  }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.authService.tokenSubject.next(response.token);
        this.router.navigate(['/']);
      },
      error: () => this.errorMessage('Invalid username or password')
    });
  }

}
