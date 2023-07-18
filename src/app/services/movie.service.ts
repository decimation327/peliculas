import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '917ae0e8';

  constructor(private http: HttpClient) { }

  searchMovies(query: string): Observable<any> {
    const url = `https://www.omdbapi.com/?apikey=${this.apiKey}&s=${query}`;
    return this.http.get(url);
  }
  getMovieDetails(movieId: string): Observable<any> {
    const url = `https://www.omdbapi.com/?apikey=${this.apiKey}&i=${movieId}`;
    return this.http.get(url);
  }

}