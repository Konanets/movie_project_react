import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovieInitialState, IMoviesService} from "../../interfaces";
import {movieService} from "../../services";


const initialState: IMovieInitialState = {
    trendingMovies: [],
    nowPlayingMovies: [],
    movies: [],
    page: 1,
    currentPage: 1,
    total_results: 0,
    total_pages: 500,
    loading:false
}


const getMovies = createAsyncThunk<IMoviesService, {
    currentPage: number,
    genresSelected: string,
    sortBy: string
}>(
    'movieSlice/getMovies',
    async ({currentPage, sortBy, genresSelected}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(currentPage, sortBy, genresSelected)
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
            state.currentPage = 1
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getMovies.fulfilled, (state, action) => {
            state.movies = action.payload.results
            if (action.payload.total_pages <= 500) {
                state.total_pages = action.payload.total_pages
            } else {
                state.total_pages = 500
            }
            state.loading=false
        })
        .addCase(getMovies.pending,(state)=>{
            state.loading=true
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
