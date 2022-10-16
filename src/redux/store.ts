import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, optionsReducer} from "./slices";


const rootReducer = combineReducers({
    genreReducer,
    optionsReducer
})

const setUpStore = () => configureStore({
    reducer: rootReducer
})

const store = setUpStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export {store}

