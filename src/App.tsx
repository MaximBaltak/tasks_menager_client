import React, {useEffect} from 'react';
import './App.scss';
import {Routes,Route,Navigate} from 'react-router-dom'
import MainPage from "./pages/main-page/MainPage";
import TasksPage from "./pages/tasks-page/TasksPage";
import AuthContainer from './components/auth/auth-container';
import {Dispatch, Selector} from "./store/store";
import {
    changeCreateDateAccessToken,
    changeLogin, changeTimeAccessToken,
    toggleAuth
} from "./store/slices/authorization-slice/authorization-slice";
import {updateTimerAccessToken} from "./utils/updateTimerAccessToken";

function App() {
    const dispatch=Dispatch()
    const auth:boolean=Selector(state=>state.authorization.auth)
    const {createDateAccessToken,timeAccessToken}=Selector(state=>state.authorization)

    useEffect(()=>{
        setInterval(()=>{
            if(!localStorage.getItem('access_token')){
                dispatch(toggleAuth(false))
            }else{
                dispatch(toggleAuth(true))
            }
            const createDateAccessToken = localStorage.getItem('create_date_access_token')
            const timeAccessToken = localStorage.getItem('time_access_token')
            if(createDateAccessToken && timeAccessToken){
                dispatch(changeTimeAccessToken(+timeAccessToken))
                dispatch(changeCreateDateAccessToken(+createDateAccessToken))
            }else{
            dispatch(changeTimeAccessToken(0))
            dispatch(changeCreateDateAccessToken(0))
        }

        },500)
    })
    useEffect(()=>{
            updateTimerAccessToken(timeAccessToken,createDateAccessToken,dispatch)
    },[createDateAccessToken])
  return (
    <div className="app">
        <div className="login"><AuthContainer/></div>
        <div className='content'>
            <Routes>
                <Route path='/' element={auth? <TasksPage/>:<MainPage/>}/>
                <Route path='/tasks' element={auth? <TasksPage/>:<Navigate to='/'/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
