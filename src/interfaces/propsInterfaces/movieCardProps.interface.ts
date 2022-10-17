export interface IMovieCardProps {
    movie: {
        id:number,
        title:string,
        vote_average:number,
        poster_path:string,
        genre_ids:number[],
        release_date:string

    }
}
