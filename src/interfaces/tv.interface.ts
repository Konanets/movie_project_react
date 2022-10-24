import {IResultsMovie} from "./movie.interface";

export interface IResultsTv {
    backdrop_path: string,
    first_air_date: string,
    genre_ids: number[],
    id: number,
    media_type: string,
    name: string,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    vote_average: number,
    vote_count: number
}

export interface ITvInitialState {
    page: number,
    tvs: IResultsTv[],
    total_results: number,
    total_pages: number,
    currentPage: number,
}

export interface ITvService {
    page: number,
    results: IResultsTv[],
    total_results: number,
    total_pages: number
}
