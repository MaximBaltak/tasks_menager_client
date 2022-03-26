import React from 'react';
import './App.scss';
import {Routes,Route} from 'react-router-dom'
import Auth from "./components/auth/Auth";
import MainPage from "./pages/main-page/MainPage";
import TasksPage from "./pages/tasks-page/TasksPage";

function App() {
  return (
    <div className="app">
        <div className="login"><Auth/></div>
        <div className='content'>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/tasks' element={<TasksPage/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
