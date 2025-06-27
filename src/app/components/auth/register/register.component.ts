import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../../material';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(
    private authService: AuthService,
    public router: Router,
    private snackBar: MatSnackBar) {}

    showSnack(message: string, isError = false) {
    this.snackBar.open(message, 'Close', {
      duration: 4000,
      panelClass: isError ? ['error-snack'] : ['success-snack']
    });
  }

  register() {
    this.authService.register(this.username, this.password).subscribe({
      next: () => {
        this.showSnack('Registration successful! Please log in.');
        this.router.navigate(['/login']);
      },
      error: () => this.showSnack('Error during registration. Please try again.', true)
    });
  }

}
