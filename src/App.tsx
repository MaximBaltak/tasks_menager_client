import React from 'react';
import './App.scss';
import svgIcons from './img/icons.svg'

function App() {
  return (
    <div className="App">
        <svg width={100} height={100}>
          <use xlinkHref={`${svgIcons}#arrow`}/>
        </svg>
    </div>
  );
}

export default App;
