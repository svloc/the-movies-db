import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=0c86041f98a01d51f1d6d079f7b7dc07');
  }
}
