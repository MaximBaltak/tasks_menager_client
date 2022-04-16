import {AxiosRequestConfig} from "axios";
import axiosConfig from "../../axios.config";

axiosConfig.interceptors.request.use((req:AxiosRequestConfig)=>{

    if (localStorage.getItem('access_token')){
        const token:string|null=localStorage.getItem('access_token')
        // @ts-ignore
        req.headers['Authorization']=`Bearer ${token}`
        return req
    }
    return req
})