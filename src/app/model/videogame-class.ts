export class VideogameClass {

    name: string;
    _pubDate: number;
    sHouse: string;
    genre: Genre;

    constructor(name: string, pubDate: Date = new Date(), sHouse: string, genre: Genre = Genre.PLATFORM ){
        this.name = name;
        this._pubDate = pubDate.getTime();
        this.sHouse = sHouse;
        this.genre = genre;
    }

    get pubDate(): Date{
        return new Date(this._pubDate)
    }

    get color(): string{
        return getGenreColor(this.genre)
    }


}

export enum Genre{
    PLATFORM = 'platform', 
    FPS = 'FPS',
    STRATEGIC = 'strategic',
    PUZZLE = 'puzzle'
}

export function getGenreColor(genre: Genre): string{
    switch (genre) {
        case Genre.PLATFORM:
            return 'yellow';
        case Genre.FPS:
            return 'tomato';
        case Genre.STRATEGIC:
            return 'green';                 
        default:
            return 'aquamarine';
    }
}
