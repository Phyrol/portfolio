import React, { useState } from 'react';
import './App.css';
import Home from './HomePage/Home';
import HeaderBar from './Shared/HeaderBar/HeaderBar';

function App() {
  return (
    <div>
      <HeaderBar />
      <Home />
    </div>
  );
}

export default App;
