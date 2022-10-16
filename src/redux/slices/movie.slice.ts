import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovieInitialState, IMoviesService} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";


const initialState: IMovieInitialState = {
    trendingMovies: [],
    movies: [],
    page: 1,
    total_results: 0,
    total_pages: 500
}


const getMovies = createAsyncThunk<IMoviesService,void>(
    'movieSlice/getMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll()
            return data
        } catch (e) {
            return rejectWithValue((e as AxiosError).response?.data)
        }
    }
)


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers:builder => builder
        .addCase(getMovies.fulfilled,(state, action)=>{
            state.movies=action.payload.results
            state.page=action.payload.page
            state.total_pages=action.payload.total_pages
            state.total_results=action.payload.total_results
        })
})


const {reducer:movieReducer ,actions:{

}}=movieSlice

const movieActions={
    getMovies
}
export {movieActions,movieReducer}
