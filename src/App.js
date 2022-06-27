import React from 'react';
import './App.css';
import Home from './HomePage/Home';
import Footer from './Shared/Footer/Footer';
import HeaderBarContainer from './Shared/HeaderBar/container/HeaderBarContainer';

function App() {
  return (
    <div className='layout_StyledContent'>
      <HeaderBarContainer />
      <div className='left-test'>

      </div>
      <div className='right-test'>

      </div>
      <div id='content'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
