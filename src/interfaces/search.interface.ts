import {IResultsMovie} from "./movie.interface";
import {IResultsTv} from "./tv.interface";


export interface ISearched {
    id: number,
    poster_path: string,
    media_type: string,
    name?: string,
    title?: string
    release_date?: string,
    first_air_date?: string,
}


export interface ISearchState {
    searched: ISearched[],
    genresSelected: string,
    sortBy: 'popularity.asc' | 'popularity.desc' | 'release_date.asc' | 'release_date.desc' ,
    year: number | null,
}

export type CompareType = IResultsMovie & IResultsTv

export interface simpleSearchRes {
    results: CompareType[]
}

export interface IFilter {
    genresSelected: string[]
    sortBy: 'popularity.asc' | 'popularity.desc' | 'release_date.asc' | 'release_date.desc',
}
