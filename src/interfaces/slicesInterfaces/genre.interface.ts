export interface IGenre {
    id: number,
    name: string
}

export interface IGenresState {
    movieGenres: IGenre[],
    tvGenres: IGenre[],
    id: number | null,
    status: string | null,
    error: string | null
}
