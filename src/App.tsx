import React from 'react';
import './App.scss';
import Auth from "./components/auth/Auth";

function App() {
  return (
    <div className="app">
        <div className="login"><Auth/></div>
        <div className='content'></div>
    </div>
  );
}

export default App;
