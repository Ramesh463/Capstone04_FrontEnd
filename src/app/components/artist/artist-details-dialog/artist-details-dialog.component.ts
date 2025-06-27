import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogModule,MatDialogRef } from '@angular/material/dialog';
import { Artist } from '../../../models/artist';
import { MATERIAL_IMPORTS } from '../../../material';
@Component({
  selector: 'app-artist-details-dialog',
  imports: [MATERIAL_IMPORTS, MatDialogModule],
  templateUrl: './artist-details-dialog.component.html',
  styleUrl: './artist-details-dialog.component.css'
})
export class ArtistDetailsDialogComponent {
    constructor(
    public dialogRef: MatDialogRef<ArtistDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Artist
  ) {}

}
