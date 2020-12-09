import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from 'src/app/class/movie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomePage {

  movies: Movie[];
  searchTerm: String;
  searchboxValue: String;

  constructor() {
    this.searchTerm = "";
  }

  StringUpdate(value: String) {
    this.searchboxValue = value;
  }

  SearchMovies() {
    this.searchTerm = this.searchboxValue;
  }

}