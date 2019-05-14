import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQCPAph-d3bDciT2XkaLRMHT4XgbaBadm9l2fxjieYf50-T-l-qvzxAy0zG8ESchw0d-TWKcve9XF5X5VM0';
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
