import { Routes } from '@angular/router';
import { ArtistListComponent } from './components/artist/artist-list/artist-list.component';
import { ArtistFormComponent } from './components/artist/artist-form/artist-form.component';
import { TrackFormComponent } from './components/track/track-form/track-form.component';
import { TrackListComponent } from './components/track/track-list/track-list.component';
import { AlbumListComponent } from './components/album/album-list/album-list.component';
import { AlbumFormComponent } from './components/album/album-form/album-form.component';
import { AlbumDetailsComponent } from './components/album/album-details/album-details.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
 { path: '', redirectTo: '/artists', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

 { path: 'artists', component: ArtistListComponent, canActivate: [AuthGuard] },
 { path: 'artists/new', component: ArtistFormComponent, canActivate: [AuthGuard]},
 { path: 'artists/:id/edit', component: ArtistFormComponent, canActivate: [AuthGuard]},

 {path: 'tracks', component: TrackListComponent, canActivate: [AuthGuard]},
 {path: 'tracks/new', component: TrackFormComponent, canActivate: [AuthGuard]},
 {path: 'tracks/:id/edit', component: TrackFormComponent, canActivate: [AuthGuard]},

 {path: 'albums', component: AlbumListComponent, canActivate: [AuthGuard]},
 {path: 'albums/new', component: AlbumFormComponent, canActivate: [AuthGuard]},
 {path: 'albums/:id/edit',component: AlbumFormComponent, canActivate: [AuthGuard]},
 {path: 'albums/:id/view', component:AlbumDetailsComponent, canActivate: [AuthGuard]},

 { path: '**', redirectTo: '/artists' }

];
