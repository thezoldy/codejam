import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/header';
import Forms from './components/form';
import Logo from './components/logo';
import Player from './components/player';

function App() {
  
  return (
    <div>
      <div>
      <Header/>
      </div>
      <div>
        <Logo/>
      </div>
      <div>
        <Forms/>
      </div>
      <div>
        <Player/>
      </div>
    </div>
  );
}

export default App;