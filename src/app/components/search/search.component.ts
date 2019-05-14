import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/_services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor(private sptotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string) {
    console.log(termino);
    this.sptotifyService.getArtista(termino)
    .subscribe((result: any) => {
      console.log(result.artists.items);
      this.artistas = result.artists.items;
    });

  }

}
