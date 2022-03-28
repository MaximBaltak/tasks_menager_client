import React from 'react';
import {formToggle, IForm} from "../store/slices/authorization-slice/types"
import {AppDispatch} from "../store/store"
import {asyncSignIn, asyncSignUp, exit, toggle} from "../store/slices/authorization-slice/authorization-slice";

export const onSubmit=(type:IForm,dispatch:AppDispatch,e:React.FormEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    if(type===formToggle.SIGN_UP){
        dispatch(asyncSignUp())
        dispatch(toggle(formToggle.EXIT))
    }else if(type===formToggle.SIGN_IN) {
        dispatch(asyncSignIn())
        dispatch(toggle(formToggle.EXIT))
    }else if(type===formToggle.EXIT) {
        dispatch(exit())
        dispatch(toggle(formToggle.SIGN_UP))
    }

}
export const onToggleForm=(type:IForm,dispatch:AppDispatch,e:React.FormEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    dispatch(toggle(type))
}