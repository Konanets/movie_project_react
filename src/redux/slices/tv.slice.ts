import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ITvInitialState, ITvService} from "../../interfaces";
import {tvService} from "../../services";
import {AxiosError} from "axios";


const initialState: ITvInitialState = {
    tvs: [],
    page: 1,
    currentPage: 1,
    total_results: 0,
    total_pages: 500,
}


const getTvs = createAsyncThunk<ITvService, {
    currentPage: number,
    genresSelected: string,
    sortBy: string
}>(
    'tvSlice/getTvs',
    async ({currentPage, sortBy, genresSelected}, {rejectWithValue}) => {
        try {
            const {data} = await tvService.getAll(currentPage, sortBy, genresSelected)
            return data
        } catch (e) {
            return rejectWithValue((e as AxiosError).message)
        }
    }
)



const tvSlice = createSlice({
    name: 'tvSlice',
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
        .addCase(getTvs.fulfilled, (state, action) => {
            state.tvs = action.payload.results
            if (action.payload.total_pages <= 500) {
                state.total_pages = action.payload.total_pages
            } else {
                state.total_pages = 500
            }
        })
})


const {
    reducer: tvReducer, actions: {
        resetPage,
        setPage
    }
} = tvSlice

const tvActions = {
    getTvs,
    resetPage,
    setPage
}
export {tvActions, tvReducer}
