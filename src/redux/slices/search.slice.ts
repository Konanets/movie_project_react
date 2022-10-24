import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {CompareType, ISearchState, ISearched, IFilter} from "../../interfaces";
import {searchService} from "../../services";
import {AxiosError} from "axios";

const initialState: ISearchState = {
    searched: [],
    genresSelected: 'all',
    sortBy: 'popularity.desc',
    year: null,
}

const getSimilar = createAsyncThunk<ISearched[] | [], { name: string }>(
    'searchSlice/GetSimilar',
    async ({name}, {rejectWithValue}) => {
        try {
            if (!name.length) return [];
            const {data} = await searchService.search(name)
            return data.results.slice(0, 6).filter(tape => tape.media_type === 'tv' || tape.media_type === 'movie').map((tape: CompareType): ISearched => {
                const new_item: ISearched = {
                    id: tape.id,
                    poster_path: tape.poster_path,
                    media_type: tape.media_type
                }
                if (tape.media_type === 'tv') {
                    new_item.name = tape.name
                    new_item.first_air_date = tape.first_air_date
                } else {
                    new_item.title = tape.title
                    new_item.release_date = tape.release_date
                }
                return new_item;
            })
        } catch (e) {
            return rejectWithValue((e as AxiosError).response?.data)
        }
    }
)

const searchSlice = createSlice({
    name: 'optionsSLice',
    initialState,
    reducers: {
        resetHeaderSearch: (state) => {
            state.searched = []
        },
        setFilter: (state, action: PayloadAction<IFilter>) => {
            if (action.payload.genresSelected) {
                console.log(5)
                state.genresSelected = action.payload.genresSelected.join(',')
            }
            if (action.payload.sortBy) {
                state.sortBy = action.payload.sortBy
            }

        },
        resetFilter: (state) => {
            console.log('reset')
            state.genresSelected = 'all'
            state.sortBy = initialState.sortBy
        },
        setGenresSelected: (state, action: PayloadAction<string>) => {
            if (!state.genresSelected.includes(action.payload)) {
                state.genresSelected = action.payload
            }
        }
    },
    extraReducers: builder => builder
        .addCase(getSimilar.fulfilled, (state, action) => {
            console.log(action.payload)
            state.searched = action.payload
        })
})


const {
    reducer: searchReducer, actions: {
        resetHeaderSearch,
        setFilter,
        resetFilter,
        setGenresSelected
    }
} = searchSlice

const searchAction = {
    getSimilar,
    resetHeaderSearch,
    setFilter,
    resetFilter,
    setGenresSelected
}

export {searchAction, searchReducer}
