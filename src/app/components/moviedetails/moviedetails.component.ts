import { Component, DebugElement, Input, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/interfaces/moviedetails';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss'],
})
export class MovieDetailsComponent implements OnInit {

  constructor(private HttpService: HttpService, private router: Router) {
    this.movieID="";
    this.GetMovieDetailsFromService();
   }

  movieID: string;
  movieReleaseDate: string;
  movieDetails: MovieDetails = {
    Title: "Cargando...",
    Released: new Date(),
    Language: "Cargando...",
    imdbRating: 0.0,
    Plot: "Cargando..."
  };


  ngOnInit() {
  }

  GetMovieDetails() {
    if (!(this.movieID.length === 0)) {
      this.HttpService.getMovieDetails(this.movieID).subscribe((details: MovieDetails) => {
        this.movieDetails = details;
        this.movieReleaseDate = this.movieDetails.Released.toString();
      })
    }
  }

  GetMovieDetailsByID(id: string){
    this.movieID = id;
    this.GetMovieDetails();
  }

  GetMovieDetailsFromService() {
    this.movieID = this.HttpService.movietoshow;
    this.GetMovieDetails();
  }

  CloseDetails() {
    this.router.navigate(['/home']);
  }

}
