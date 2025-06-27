import { Component, Inject } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../material';
import { Track } from '../../../models/track';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-track-details-dialog',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './track-details-dialog.component.html',
  styleUrl: './track-details-dialog.component.css'
})
export class TrackDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TrackDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Track
  ) {}

}
