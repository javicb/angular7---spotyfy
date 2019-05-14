import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/_services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getNewReleases()
      .subscribe((result: any) => {
        this.nuevasCanciones = result;
      });

  }

  ngOnInit() {
  }

}
