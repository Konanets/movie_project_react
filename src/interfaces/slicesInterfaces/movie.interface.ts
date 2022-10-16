export interface IResultsMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    name: string,
    id: number,
    media_type: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface IMovieInitialState {
    page: number,
    movies: IResultsMovie[],
    trendingMovies: IResultsMovie[]
    total_results: number,
    total_pages: number
}



