import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/class/movie';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomePage {

  movies: Movie[];
  searchTerm: string;
  searchboxValue: string;
  testzone: Observable<Object>;

  constructor(private HttpService: HttpService) {
    this.searchTerm = "";
    this.movies = Movie[0];
  }

  StringUpdate(value: string) {
    this.searchboxValue = value;
  }

  SearchMovies() {
    this.searchTerm = this.searchboxValue;
    let list = this.HttpService.getMovieList(this.searchTerm);
    this.testzone = list;
  }

}