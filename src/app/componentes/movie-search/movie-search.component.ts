import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  searchQuery!: string;
  movies!: any[];

  constructor(private movieService: MovieService) { }

  searchMovies(): void {
    this.movieService.searchMovies(this.searchQuery)
      .subscribe(data => {
        this.movies = data.Search;
      });
}
getMovieDetails(movieId: string): void {
  this.movieService.getMovieDetails(movieId)
    .subscribe(data => {
      console.log(data);
      const movieIndex = this.movies.findIndex(movie => movie.imdbID === movieId);
      if (movieIndex > -1) {
        this.movies[movieIndex].Director = data.Director;
        this.movies[movieIndex].detailsVisible = true; // Agregar la propiedad detailsVisible
      }
    });
}


  
}
