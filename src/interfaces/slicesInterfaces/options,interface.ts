export interface ISearched {
    id: number,
    poster_path: string,
    media_type: string,
    name?: string,
    title?: string
    release_date?: string,
    first_air_date?: string,
}


export interface IOptionsState {
    searched: ISearched[]
}


