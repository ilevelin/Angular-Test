export class Movie {

    id: String;
    name: String;
    release: String;
    language: String;
    description: String;
    rating: number;

    constructor() {
        this.id = "ID not specified";
        this.name = "No name";
        this.release = "No release date";
        this.language = "No language";
        this.description = "No information about the movie has been set.";
        this.rating = -1.0;
    }

}
