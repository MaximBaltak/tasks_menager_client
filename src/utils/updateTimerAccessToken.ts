import {AppDispatch} from "../store/store";
import {asyncUpdateRefreshToken} from "../store/slices/authorization-slice/authorization-slice";

export const updateTimerAccessToken = (
    timeAccessToken: number,
    createDateAccessToken: number,
    dispatch:AppDispatch
):void=> {
    if(!timeAccessToken||!createDateAccessToken){
        return
    }
    let timer:number=0
    const intervalId=setInterval(()=>{
        const nowDate:number=new Date().getTime()
        timer=nowDate-createDateAccessToken
        if(timer>=timeAccessToken-1000){
            dispatch(asyncUpdateRefreshToken())
            clearInterval(intervalId)
        }
    },1000)
}