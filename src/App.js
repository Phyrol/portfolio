import React, { useState } from 'react';
import './App.css';
import Home from './HomePage/Home';
import HeaderBar from './Shared/HeaderBar/HeaderBar';

function App() {
  return (
    <div id='root'>
      <div className='layout_StyledContent'>
        <HeaderBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
