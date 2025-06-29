import { ActivatedRoute, Router } from '@angular/router';
import { Album } from './../../../models/album';
import { Component, OnInit } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../material';
import { AlbumService } from '../../../services/album.service';
import { ArtistDetailsDialogComponent } from '../../artist/artist-details-dialog/artist-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TrackDetailsDialogComponent } from '../../track/track-details-dialog/track-details-dialog.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-album-details',
  imports: [MATERIAL_IMPORTS,CommonModule],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent implements OnInit {
albums?: Album;

constructor(private svc: AlbumService,
  private router: Router,
  private route: ActivatedRoute,
  private dialog: MatDialog
){

}
  ngOnInit(): void {
    const id: number = +this.route.snapshot.params['id'];
    this.svc.findById(id).subscribe((a) =>(this.albums =a));
  }

  cancel(): void {
    this.router.navigate(['/albums']);
  }

  openArtistDialog(artist: any): void {
    this.dialog.open(ArtistDetailsDialogComponent, {
      data: artist
    });
  }

  openTrackDialog(track: any): void {
    this.dialog.open(TrackDetailsDialogComponent, {
      data: track
    });
  }


}


