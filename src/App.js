import React from 'react';
import './App.css';
import Home from './HomePage/Home';
import HeaderBar from './Shared/HeaderBar/HeaderBar';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div id='root'>
      <div className='layout_StyledContent'>
        <HeaderBar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
