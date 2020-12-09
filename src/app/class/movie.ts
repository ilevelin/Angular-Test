export class Movie {

    id: string;
    name: string;
    release: string;
    language: string;
    description: string;
    rating: number;

    constructor() {
        this.id = "No ID";
        this.name = "No name";
        this.release = "No release date";
        this.language = "No language";
        this.description = "No information about the movie has been set.";
        this.rating = -1.0;
    }

}
