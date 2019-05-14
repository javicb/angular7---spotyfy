import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCPAph-d3bDciT2XkaLRMHT4XgbaBadm9l2fxjieYf50-T-l-qvzxAy0zG8ESchw0d-TWKcve9XF5X5VM0'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCPAph-d3bDciT2XkaLRMHT4XgbaBadm9l2fxjieYf50-T-l-qvzxAy0zG8ESchw0d-TWKcve9XF5X5VM0'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}a&type=artist&limit=15`, { headers });
  }
}
