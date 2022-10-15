import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IGenre, IGenresState} from "../../interfaces";
import {genreService} from "../../services";
import {AxiosError} from "axios";


const initialState: IGenresState = {
    movieGenres: [],
    tvGenres: [],
    id: null,
    status: null,
    error: ''
}

const getMovieGenes = createAsyncThunk<IGenre[], void>(
    'genreSlice/getMovieGenre',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAllMovieGenre()
            return data.genres
        } catch (e) {
            return rejectWithValue((e as AxiosError).response?.data)
        }
    }
)

const getTvGenes = createAsyncThunk<IGenre[], void>(
    'genreSlice/getTvGenes',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAllTvGenre()
            return data.genres
        } catch (e) {
            return rejectWithValue((e as AxiosError).response?.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSLice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getMovieGenes.fulfilled, (state, action) => {
            state.movieGenres = action.payload
            state.error=''
        })
        .addCase(getTvGenes.fulfilled, (state, action) => {
            state.tvGenres = action.payload
            state.error=''
        })
})



const {reducer:genreReducer,actions:{

}}=genreSlice

const genreActions={
    getTvGenes,
    getMovieGenes
}

export {
    genreActions,
    genreReducer
}
