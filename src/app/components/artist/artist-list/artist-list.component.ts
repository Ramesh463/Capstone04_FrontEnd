import { Artist } from '../../../models/artist';
import { Component, OnInit } from '@angular/core';

import { ArtistService } from '../../../services/artist.service';
import { Route, Router, ActivatedRoute } from '@angular/router';

import { MATERIAL_IMPORTS } from '../../../material';
import { ArtistDetailsDialogComponent } from '../artist-details-dialog/artist-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../Shared/delete-confirmation.component';



@Component({
  selector: 'app-artist-list',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css',

})
export class ArtistListComponent implements OnInit {


artists: Artist[] = [];
errorMessage ='';


constructor(
  private svc: ArtistService,
  public router: Router,
  private dialog: MatDialog

){}
  ngOnInit(): void {
    this.loadArtist();
  }

loadArtist(): void {
  this.svc.findAllArtists().subscribe({
      next: (data) => this.artists = data,
      error: (err) => console.error('API error:', err)
    });
  }

addArtist(): void {
    this.router.navigate(['/artists/new']);
  }



  editArtist(artist: Artist): void{
    if(artist.id != null){
      this.router.navigate(['/artists',artist.id,'edit']);
    }
  }

  deleteArtist(artist: Artist): void {
  if (artist.id == null)
    return;

  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    data: { message: `Are you sure you want to delete artist "${artist.firstName} ${artist.lastName}"?` }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.svc.delete(artist.id as number).subscribe({
        next: () => this.loadArtist(),
        error: () => this.errorMessage = 'Error deleting artist',
      });
    }
  });
}

  viewArtist(artist: Artist): void{
     if(artist.id != null){
      this.router.navigate(['/artists',artist.id,'view']);
    }
  }

  openArtistDialog(artist: any): void {
      this.dialog.open(ArtistDetailsDialogComponent, {
        data: artist
      });
    }
}
