import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/_services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(private sptotifyService: SpotifyService) { }

  buscar(termino: string) {
    this.loading = true;
    this.sptotifyService.getArtistas(termino)
      .subscribe((result: any) => {
        this.artistas = result;
        this.loading = false;
      });

  }

}
