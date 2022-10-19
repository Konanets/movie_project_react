import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovieInitialState, IMoviesService} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";


const initialState: IMovieInitialState = {
    trendingMovies: [],
    nowPlayingMovies: [],
    movies: [],
    page: 1,
    current_page: 1,
    total_results: 0,
    total_pages: 500,
}


const getMovies = createAsyncThunk<IMoviesService, { current_page: number }>(
    'movieSlice/getMovies',
    async ({current_page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(current_page)
            return data
        } catch (e) {
            return rejectWithValue((e as AxiosError).message)
        }
    }
)

const getTrendingMovies = createAsyncThunk<IMoviesService, void>(
    'movieSlice/getTrendingMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getTrendingMovies()
            return data
        } catch (e) {
            return rejectWithValue((e as AxiosError).message)
        }
    }
)

const getNowPlaying = createAsyncThunk<IMoviesService, void>(
    'movieSlice/getNowPlaying',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getNow_playingMovies()
            console.log(data)
            return data
        } catch (e) {
            const res = e as AxiosError
            return rejectWithValue((e as AxiosError).message)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        resetPage: (state) => {
            state.current_page = 0
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.current_page = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getMovies.fulfilled, (state, action) => {
            state.movies = action.payload.results
        })
        .addCase(getTrendingMovies.fulfilled, (state, action) => {
            state.trendingMovies = action.payload.results
        })
        .addCase(getNowPlaying.fulfilled, (state, action) => {
            state.nowPlayingMovies = action.payload.results
        })
})


const {
    reducer: movieReducer, actions: {
        resetPage,
        setPage
    }
} = movieSlice

const movieActions = {
    getMovies,
    getTrendingMovies,
    getNowPlaying,
    resetPage,
    setPage
}
export {movieActions, movieReducer}
