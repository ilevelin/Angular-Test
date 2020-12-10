import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MovieSearch } from '../interfaces/moviesearch';
import { MovieSearchElement } from '../interfaces/moviesearchelement';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomePage {

  movies: MovieSearchElement[];
  searchTerm: string;
  searchboxValue: string;

  pageNumber: number;
  resultNumber: number;

  constructor(private HttpService: HttpService) {
    this.searchTerm = "";
    this.movies = new Array<MovieSearchElement>();
  }

  StringUpdate(value: string) {
    this.searchboxValue = value;
  }

  SearchMovies() {
    this.pageNumber = 1;
    this.searchTerm = this.searchboxValue;
    this.movies.splice(0, this.movies.length);
    this.HttpService.getMovieList(this.searchTerm).subscribe((list: MovieSearch) => {
      this.movies = this.movies.concat(list.Search);
      this.resultNumber = list.totalResults;
      while (this.resultNumber >= (this.pageNumber*10)){
        this.pageNumber = this.pageNumber + 1;
        this.HttpService.getMovieListPage(this.searchTerm,this.pageNumber).subscribe((list: MovieSearch) => {
          this.movies = this.movies.concat(list.Search);
        });
      }
    });
  }

}