import { Component, OnInit } from '@angular/core';
import { Track } from '../../../models/track';
import { TrackService } from '../../../services/track.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../../material';

@Component({
  selector: 'app-track-details',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './track-details.component.html',
  styleUrl: './track-details.component.css'
})
export class TrackDetailsComponent implements OnInit {
tracks?: Track;

   constructor(
    private svc: TrackService,
    private router: Router,
    private route: ActivatedRoute
  ){}


  ngOnInit(): void {
    const id: number = +this.route.snapshot.params['id'];
    this.svc.getTrackById(id).subscribe((a) =>(this.tracks =a));
  }

   cancel():void {
    this.router.navigate(['/tracks'])
  }

}
