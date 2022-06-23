import React from 'react';
import './App.css';
import Home from './HomePage/Home';
import Footer from './Shared/Footer/Footer';
import HeaderBarContainer from './Shared/HeaderBar/container/HeaderBarContainer';

function App() {
  return (
    <div id='root'>
      <div className='layout_StyledContent'>
        <HeaderBarContainer />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
