import {IGenres, ISpoken_languages} from "./movie.interface";

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


export interface ICreated_by {
    id: string,
    credit_id: string,
    name: string,
    gender: number,
    profile_path: string
}

export interface ILastEpisodeToAir {
    air_date: string,
    episode_number: number,
    id: number,
    name: string,
    overview: string,
    production_code: string,
    season_number: number,
    still_path: string,
    vote_average: number,
    vote_count: number
}

export interface INetworks {
    name: string,
    id: number,
    logo_path: string,
    origin_country: string
}

export interface IProductionCompanies {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string,
}

export interface IProductionCountries {
    iso_3166_1: string,
    name: string,
}

export interface ISeasons {
    air_date: string,
    episode_count: number,
    id: number,
    name: string,
    overview: string,
    poster_path: string,
    season_number: number
}


export interface ITv {
    backdrop_path: string,
    created_by: ICreated_by[],
    episode_run_time: number,
    first_air_date: string,
    genres: IGenres[],
    homepage: string,
    id: number,
    in_production: boolean,
    languages: string[],
    last_air_date: string
    last_episode_to_air: ILastEpisodeToAir,
    name: string,
    next_episode_to_air: null,
    networks: INetworks,
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: IProductionCompanies[],
    production_countries: IProductionCountries[],
    seasons: ISeasons[],
    spoken_languages: ISpoken_languages[],
    status: string,
    tagline: string,
    type: string,
    vote_average: number,
    vote_count: number
}

