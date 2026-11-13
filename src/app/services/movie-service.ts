
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Movie } from '../interfaces/movie';
import { MovieResponse } from '../interfaces/movie-response';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly http = inject(HttpClient);
  private readonly url = environment.api_Url;
  private readonly key = environment.api_Key;

  public movieList: Movie[] = [];

  getMovieList(): Observable<Movie[]> {
    return this.http
      .get<MovieResponse>(`${this.url}now_playing?api_key=${this.key}`)
      .pipe(
        map(response => response.results)
      );
  }
}

