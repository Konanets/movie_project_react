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
    vote_count: number,
}

export interface IMovieInitialState {
    page: number,
    movies: IResultsMovie[],
    nowPlayingMovies: IResultsMovie[],
    trendingMovies: IResultsMovie[],
    total_results: number,
    total_pages: number,
    currentPage: number,
}

export interface IMoviesService {
    page: number,
    results: IResultsMovie[],
    total_results: number,
    total_pages: number
}


export interface IBelongs_to_collection {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string,
}

export interface IProduction_company {
    iso_3166_1: string,
    name: string,
}

export interface IProduction_country {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string,
}

export interface ISpoken_languages {
    english_name: string,
    iso_639_1: string,
    name: string,
}

export interface IGenres {
    id: number,
    name: string,
}

export interface IMovie {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: IBelongs_to_collection,
    budget: number,
    genres: IGenres[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: IProduction_company[],
    production_countries: IProduction_country[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: ISpoken_languages[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export interface IVideoResults {
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: boolean,
    published_at: string,
    id: string,
}

export interface IVideos {
    id: number
    results: IVideoResults[]
}




