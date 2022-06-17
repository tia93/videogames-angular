export class VideogameClass {

    name: string;
    _pubDate: number;
    sHouse: string;
    genre: Genre;
    private _outOfProdution?: number

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

    get outOfProdution(): Date | null {
        return this._outOfProdution? new Date(this._outOfProdution): null
    }

    static compareByName(a: VideogameClass, b: VideogameClass){
        return a.name.localeCompare(b.name)
    }

    static compareByDate(a: VideogameClass, b: VideogameClass){
        return  a._pubDate - b._pubDate;
    }

    static compareBySHous(a: VideogameClass, b: VideogameClass){
        return a.sHouse.localeCompare(b.sHouse)
    }
     
    done(): void{
        const now = new Date()
        this._outOfProdution = now.getTime()
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
