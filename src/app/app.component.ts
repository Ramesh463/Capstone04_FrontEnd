import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MATERIAL_IMPORTS } from './material';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MATERIAL_IMPORTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MusicApplication';
  constructor(public router: Router,
    private authSvc: AuthService
  ) {}

  logout(): void{
    this.authSvc.logout();
  }
}
