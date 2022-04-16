import React, {useEffect} from 'react';
import './App.scss';
import {Routes,Route,Navigate} from 'react-router-dom'
import MainPage from "./pages/main-page/MainPage";
import TasksPage from "./pages/tasks-page/TasksPage";
import AuthContainer from './components/auth/auth-container';
import {Dispatch, Selector} from "./store/store";
import {toggleAuth} from "./store/slices/authorization-slice/authorization-slice";

function App() {
    const dispatch=Dispatch()
    const auth:boolean=Selector(state=>state.authorization.auth)
    useEffect(()=>{
        setInterval(()=>{
            if(!localStorage.getItem('access_token')){
                dispatch(toggleAuth(false))
            }
        },500)
    },[])
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
