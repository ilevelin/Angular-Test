import { Injectable, ɵɵresolveBody } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MovieSearch } from '../interfaces/moviesearch';
import { MovieDetails } from '../interfaces/moviedetails';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiurl: string;
  httpurl: string;

  movietoshow: string;

  constructor(private http: HttpClient) { 
    this.apiurl = "http://www.omdbapi.com/?apikey=309580d6&";
  }

  getMovieList(searchTerm: string) {
    if (searchTerm.length === 0) return null;
    this.httpurl = this.apiurl + "s=" + searchTerm;
    let getResult = this.http.get<MovieSearch>(this.httpurl, {observe: "body", responseType: "json"});
    return getResult;
  }
  
  getMovieListPage(searchTerm: string, page:number) {
    if (searchTerm.length === 0) return null;
    this.httpurl = this.apiurl + "s=" + searchTerm + "&page=" + page.toString;
    let getResult = this.http.get<MovieSearch>(this.httpurl, {observe: "body", responseType: "json"});
    return getResult;
  }

  getMovieDetails(movieID: string) {
    this.httpurl = this.apiurl + "i=" + movieID;
    let getResult = this.http.get<MovieDetails>(this.httpurl, {observe: "body", responseType: "json"});
    return getResult;
  }

}
