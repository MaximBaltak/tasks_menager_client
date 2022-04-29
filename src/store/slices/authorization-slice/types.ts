export enum formToggle{
    SIGN_UP='signUp',
    SIGN_IN='signIn',
    EXIT='exit',
}
export type IForm=formToggle.SIGN_UP|formToggle.SIGN_IN|formToggle.EXIT
export interface IAuthorizationState{
    createDateAccessToken:number,
    timeAccessToken:number,
    auth:boolean
    typeForm:IForm,
    login:string,
    password:string,
    error:string
}