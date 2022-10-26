import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, Movie } from '../models/movies';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.baseUrl}/getcategories`);
  }

  getMovies(id: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.baseUrl}/getmovies?id=${id}`);
  }

  getMovie(id: string): Observable<string> {
    return this.http.get(`${environment.baseUrl}/getmovie?id=${id}`, {
      responseType: 'text',
    });
  }
}
