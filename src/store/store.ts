import { configureStore } from "@reduxjs/toolkit";
import authorizationSlice from './slices/authorization-slice/authorization-slice'
import tasksSlice from './slices/tasks-slice/tasks-slice'
import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";
 const store= configureStore({
     reducer:{
         authorization:authorizationSlice.reducer,
         tasks:tasksSlice.reducer
     },
     devTools:true
 })
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
export const Selector:TypedUseSelectorHook<RootState>=useSelector
export const Dispatch=()=>useDispatch<AppDispatch>()
export default store


