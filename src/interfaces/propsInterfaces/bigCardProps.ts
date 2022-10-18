



export interface IMovieListBigCardProps{
    movie: {
        id:number,
        title:string,
        vote_average:number,
        backdrop_path:string,
        genre_ids:number[],
        release_date:string,
        overview:string
    }
}
