import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {formToggle, IAuthorizationState, IForm} from "./types";
import {RootState} from "../../store";
import {IUserAuthBody} from "../../../api/requests/auth/types";
import AuthRequests from './../../../api/requests/auth/auth'
export const asyncSignIn =createAsyncThunk(
    'authorization/asyncSignIn',
    async (_,thunkAPI)=>{
        const state=(thunkAPI.getState() as RootState).authorization;
        if(!state.login || !state.password){
            thunkAPI.rejectWithValue('поля не должны быть пустыми')
        }else {
            try {
                const body:IUserAuthBody={
                    login: state.login,
                    password: state.password,
                }
                const {data}= await AuthRequests.auth(body)
                return data
            }catch(e) {
                // @ts-ignore
                thunkAPI.rejectWithValue(e)
            }
        }
    }
)
export const asyncSignUp =createAsyncThunk(
'authorization/asyncSignUP',
async (_,thunkAPI) =>{
    const state=(thunkAPI.getState() as RootState).authorization;
    if(!state.login || !state.password){
        thunkAPI.rejectWithValue('поля не должны быть пустыми')
    }else {
        try {
            const body:IUserAuthBody={
                login: state.login,
                password: state.password,
            }
            const {data}= await AuthRequests.registr(body)
            return data
        }catch(e) {
            // @ts-ignore
            thunkAPI.rejectWithValue(e.body.message)
        }
    }

}
)
const initialState:IAuthorizationState={
    auth:false,
    typeForm:formToggle.SIGN_UP,
    login:'',
    password:'',
    error:'',
}
const authorizationSlice=createSlice({
    name:'authorization',
    initialState,
    reducers:{
        changeLogin:(state,action:PayloadAction<string>)=>{
            state.login=action.payload
        },
        changePassword:(state,action:PayloadAction<string>)=>{
            state.password=action.payload
        },
        toggle:(state,action:PayloadAction<IForm>)=>{
            state.typeForm=action.payload
        },
        exit:state=>{
            localStorage.clear()
            state.auth=false
        },
         toggleAuth:(state,action:PayloadAction<boolean>)=>{
             state.auth=action.payload
         }
    },
    extraReducers:{
        [asyncSignUp.fulfilled.type]:(state,action:PayloadAction<any>)=>{
            localStorage.setItem('access_token',JSON.stringify(action.payload.accessToken))
            localStorage.setItem('refresh_token',JSON.stringify(action.payload.refreshToken))
            localStorage.setItem('time_access_token',JSON.stringify(action.payload.expiresIn))
            console.log(action.payload)
            state.login=''
            state.password=''
            state.error=''
            state.auth=true
        },
        [asyncSignUp.rejected.type]:(state,action:PayloadAction<any>)=>{
            state.login=''
            state.password=''
            console.log(action.payload)
        },
        [asyncSignIn.fulfilled.type]:(state,action:PayloadAction<any>)=>{
            localStorage.setItem('access_token',JSON.stringify(action.payload.accessToken))
            localStorage.setItem('refresh_token',JSON.stringify(action.payload.refreshToken))
            localStorage.setItem('time_access_token',JSON.stringify(action.payload.expiresIn))
            console.log(action.payload)
            state.login=''
            state.password=''
            state.error=''
            state.auth=true
        },
        [asyncSignIn.rejected.type]:(state,action:PayloadAction<any>)=>{
            state.login=''
            state.password=''
            console.log(action.payload)
        }
    }
})
export const {changeLogin,
    changePassword,
    exit,
    toggle,
    toggleAuth
}=authorizationSlice.actions
export default authorizationSlice