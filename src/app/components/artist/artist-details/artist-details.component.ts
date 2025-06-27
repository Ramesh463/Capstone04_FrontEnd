import { Component, OnInit } from '@angular/core';
import { Artist } from '../../../models/artist';
import { ArtistService } from '../../../services/artist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../../material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artist-details',
  imports: [ MATERIAL_IMPORTS, CommonModule],
  templateUrl: './artist-details.component.html',
  styleUrl: './artist-details.component.css'
})
export class ArtistDetailsComponent implements OnInit {

  artists?: Artist;

  constructor(

    private svc: ArtistService,
    private router: Router,
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
     const id: number = +this.route.snapshot.params['id'];
    this.svc.findById(id).subscribe((a) =>(this.artists =a));
  }

   cancel():void {
    this.router.navigate(['/artists'])
  }


}
