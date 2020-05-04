import React from 'react';
import Ueffect from './Components/Ueffect'
import Ustate from './Components/Ustate'

import 'element-theme-default';
import './App.css';

function App() {
  return (
    <div className="App">
        <Ustate></Ustate>
        <Ueffect></Ueffect>
    </div>
  );
}

export default App;
