import React from 'react';
import './App.scss';
import {Routes,Route} from 'react-router-dom'
import MainPage from "./pages/main-page/MainPage";
import TasksPage from "./pages/tasks-page/TasksPage";
import AuthContainer from './components/auth/auth-container';

function App() {
  return (
    <div className="app">
        <div className="login"><AuthContainer/></div>
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
