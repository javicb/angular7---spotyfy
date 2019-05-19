import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/_services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  id = 'id';
  artista: any = {};
  loadingArtist: boolean;
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute,
              private spotyService: SpotifyService) {
  }

  ngOnInit() {
    this.loadingArtist = true;
    this.router.params.subscribe(params => {
      this.getArtista(params[this.id]);
      this.getTopTracks(params[this.id]);
    });

  }

  getArtista(id: string) {
    this.loadingArtist = true;
    this.spotyService.getArtista(id)
      .subscribe(artista => {
        this.artista = artista;
        this.loadingArtist = false;
      });
  }

  getTopTracks(id: string) {
    this.spotyService.getTopTacks(id)
      .subscribe(topTracks => {
        this.topTracks = topTracks;
      });
  }

}
