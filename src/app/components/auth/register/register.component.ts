import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../../material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [MATERIAL_IMPORTS,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    username = '';
  password = '';
  message = '';

  constructor(private authService: AuthService, public router: Router) {}

  register() {
    this.authService.register(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => this.message = 'Error during registration. Please try again.'
    });
  }

}
