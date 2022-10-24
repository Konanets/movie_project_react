import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IAuthInitialState} from "../../interfaces";
import {authService} from "../../services";


const initialState: IAuthInitialState = {
    account_id: 0,
    session_id: '',
    error: ''
}

const login = createAsyncThunk<string, { username: string, password: string }, {
    rejectValue: string
}>(
    'authSlice/login',
    async ({username, password}, {rejectWithValue}) => {
        try {
            const {data: {request_token}} = await authService.createRequestToken()
            const {data: {success}} = await authService.createSessionWithLogin(request_token, username, password)
            if (success) {
                const {data} = await authService.createSession(request_token)
                return data.session_id
            }
            return ''

        } catch (e) {
            return rejectWithValue("Invalid data, try again.")
        }
    }
)


const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        logOut: (state) => {
            state.session_id = ''
            state.error = ''
            state.account_id = 0
        },
        setAccountId: (state, action: PayloadAction<number>) => {
            state.account_id = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(login.fulfilled, (state, action) => {
            state.session_id = action.payload
            state.error = ''
        })
        .addCase(login.rejected, (state, action) => {
            if (action.payload?.length) {
                state.error = action.payload
            }
        })
})


const {
    reducer: authReducer, actions: {
        logOut,
        setAccountId
    }
} = authSlice

const authActions = {
    login,
    logOut,
    setAccountId
}

export {authActions, authReducer}
