import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TrackService } from '../../../services/track.service';
import { Router } from '@angular/router';
import { Track } from '../../../models/track';
import { Genre } from '../../../models/GENRE';
import { MATERIAL_IMPORTS } from '../../../material';
import { TrackDetailsDialogComponent } from '../track-details-dialog/track-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../Shared/delete-confirmation.component';

@Component({
  selector: 'app-track-list',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './track-list.component.html',
  styleUrl: './track-list.component.css',

})
export class TrackListComponent implements OnInit {
tracks: Track[] = [];
errorMessage ='';
genre = Genre;

constructor(
  private svc: TrackService,
  public router: Router,
  private dialog: MatDialog
){}

  ngOnInit(): void {
   this.loadTracks();
  }
  loadTracks(): void {
    this.svc.getAllTrack().subscribe({
       next: (data) => (this.tracks = data),
      error: (err) => (this.errorMessage = 'Error loading courses'),
    })
  }
  addTrack(): void{
    this.router.navigate(['/tracks/new'])
  }

  editTrack(track: Track): void {
    if(track.id != null){
      this.router.navigate(['/tracks', track.id, 'edit']);
    }

  }

  deleteTrack(track: Track): void {
    if (track.id == null) return;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: { message: `Are you sure you want to delete Track "${track.title} "?` }
      });


    dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.svc.deleteTrack(track.id as number).subscribe({
        next: () => this.loadTracks(),
        error: () => (this.errorMessage = 'Error deleting Track'),
      });
    }
  });
}

viewTrack(track: Track): void{
     if(track.id != null){
      this.router.navigate(['/tracks',track.id,'view']);
    }
  }

  openTrackDialog(track: any): void {
      this.dialog.open(TrackDetailsDialogComponent, {
        data: track
      });
    }


}
