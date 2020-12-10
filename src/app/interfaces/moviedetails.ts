export interface MovieDetails {

    Title:string;
    Year:number;
    Rated:string;
    Released:string;
    Runtime:string;
    Genre:string;
    Director:string;
    Writer:string;
    Actors:string;
    Plot:string;
    Language:string;
    Country:string;
    Awards:string;
    Poster:string;
    Ratings:object[]; // se puede cambiar por otra interface nueva
    Metascore:string;
    imdbRating:number;
    imdbVotes:number;
    imdbID:string;
    Type:string;
    DVD:string;
    BoxOffice:string;
    Production:string;
    Website:string;
    Response:boolean;

}
