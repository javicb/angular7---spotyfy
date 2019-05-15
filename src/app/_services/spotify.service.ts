import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQB8YMZULbBEmlWzNU6mbrsArrgURLFDi2zBjw_GfxG8qwZVGUiQz75vf1-DuuNtTMcrEclCPsT_hxwL2rM';
  albums = 'albums';
  artists = 'artists';

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(result => result[this.albums].items));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}a&type=artist&limit=15`)
      .pipe(map(result => result[this.artists].items));
  }
}
