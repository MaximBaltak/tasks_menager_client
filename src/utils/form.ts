import React from 'react';
import {formToggle, IForm} from "../store/slices/authorization-slice/types"
import {AppDispatch} from "../store/store"
import {asyncSignIn, asyncSignUp, exit, toggle} from "../store/slices/authorization-slice/authorization-slice";

export const form=(type:IForm, dispatch:AppDispatch, e:React.FormEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    if(type===formToggle.SIGN_UP){
        dispatch(asyncSignUp())
    }else if(type===formToggle.SIGN_IN) {
        dispatch(asyncSignIn())
    }else if(type===formToggle.EXIT) {
        dispatch(exit())
    }

}
export const onToggleForm=(type:IForm,dispatch:AppDispatch,e:React.FormEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    dispatch(toggle(type))
}