import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {formToggle, IAuthorizationState, IForm} from "./types";
import {RootState} from "../../store";
import {IRefreshTokenBody, IUserAuthBody} from "../../../api/requests/auth/types";
import AuthRequests from './../../../api/requests/auth/auth'

export const asyncSignIn = createAsyncThunk(
    'authorization/asyncSignIn',
    async (_, thunkAPI) => {
        const state = (thunkAPI.getState() as RootState).authorization;
        if (!state.login || !state.password) {
            thunkAPI.rejectWithValue('поля не должны быть пустыми')
        } else {
            try {
                const body: IUserAuthBody = {
                    login: state.login,
                    password: state.password,
                }
                const {data} = await AuthRequests.auth(body)
                return data
            } catch (e) {
                // @ts-ignore
                thunkAPI.rejectWithValue(e)
            }
        }
    }
)
export const asyncSignUp = createAsyncThunk(
    'authorization/asyncSignUP',
    async (_, thunkAPI) => {
        const state = (thunkAPI.getState() as RootState).authorization;
        if (!state.login || !state.password) {
            thunkAPI.rejectWithValue('поля не должны быть пустыми')
        } else {
            try {
                const body: IUserAuthBody = {
                    login: state.login,
                    password: state.password,
                }
                const {data} = await AuthRequests.registr(body)
                return data
            } catch (e) {
                // @ts-ignore
                thunkAPI.rejectWithValue(e.body.message)
            }
        }

    }
)
export const asyncUpdateRefreshToken = createAsyncThunk(
    'authorization/asyncUpdateRefreshToken',
    async (_, thunkAPI) => {
        try {
            const body: IRefreshTokenBody = {
                refreshToken:JSON.parse(
                    localStorage.getItem('refresh_token')||''
                )
            }
            const {data} = await AuthRequests.refreshToken(body)
            return data
        } catch (e) {
            // @ts-ignore
            thunkAPI.rejectWithValue(e.body.message)
        }
    }
)
const initialState: IAuthorizationState = {
    createDateAccessToken:0,
    timeAccessToken:0,
    auth: false,
    typeForm: formToggle.SIGN_UP,
    login: '',
    password: '',
    error: '',
}
const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        changeLogin: (state, action: PayloadAction<string>) => {
            state.login = action.payload
        },
        changeCreateDateAccessToken: (state, action: PayloadAction<number>) => {
            state.createDateAccessToken=action.payload
        },
        changeTimeAccessToken: (state, action: PayloadAction<number>) => {
            state.timeAccessToken=action.payload
        },
        changePassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        toggle: (state, action: PayloadAction<IForm>) => {
            state.typeForm = action.payload
        },
        exit: state => {
            localStorage.clear()
            state.auth = false
        },
        toggleAuth: (state, action: PayloadAction<boolean>) => {
            state.auth = action.payload
        }
    },
    extraReducers: {
        [asyncSignUp.fulfilled.type]: (state, action: PayloadAction<any>) => {
            localStorage.setItem('access_token', JSON.stringify(action.payload.accessToken))
            localStorage.setItem('refresh_token', JSON.stringify(action.payload.refreshToken))
            localStorage.setItem('time_access_token', JSON.stringify(action.payload.expiresIn))
            localStorage.setItem('create_date_access_token', JSON.stringify(action.payload.access_createDate))
            console.log(action.payload)
            state.login = ''
            state.password = ''
            state.error = ''
            state.auth = true
        },
        [asyncSignUp.rejected.type]: (state, action: PayloadAction<any>) => {
            state.login = ''
            state.password = ''
            console.log(action.payload)
        },
        [asyncSignIn.fulfilled.type]: (state, action: PayloadAction<any>) => {
            localStorage.setItem('access_token', JSON.stringify(action.payload.accessToken))
            localStorage.setItem('refresh_token', JSON.stringify(action.payload.refreshToken))
            localStorage.setItem('time_access_token', JSON.stringify(action.payload.access_expiresIn))
            localStorage.setItem('create_date_access_token', JSON.stringify(action.payload.access_createDate))
            console.log(action.payload)
            state.login = ''
            state.password = ''
            state.error = ''
            state.auth = true
        },
        [asyncUpdateRefreshToken.fulfilled.type]: (state, action: PayloadAction<any>) => {
            localStorage.setItem('access_token', JSON.stringify(action.payload.accessToken))
            localStorage.setItem('refresh_token', JSON.stringify(action.payload.refreshToken))
            localStorage.setItem('time_access_token', JSON.stringify(action.payload.access_expiresIn))
            localStorage.setItem('create_date_access_token', JSON.stringify(action.payload.access_createDate))
            console.log(action.payload)
            state.login = ''
            state.password = ''
            state.error = ''
            state.auth = true
        },
        [asyncUpdateRefreshToken.rejected.type]: (state, action: PayloadAction<any>) => {
            state.login = ''
            state.password = ''
            console.log(action.payload)
        },
        [asyncSignIn.rejected.type]: (state, action: PayloadAction<any>) => {
            state.login = ''
            state.password = ''
            console.log(action.payload)
        },
    }
})
export const {
    changeLogin,
    changePassword,
    exit,
    toggle,
    toggleAuth,
    changeCreateDateAccessToken,
    changeTimeAccessToken
} = authorizationSlice.actions
export default authorizationSlice