import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Siderbar from './components/sidebar/sidebar';
import Merchant from './pages/merchant/merchant';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='item'>
        <Siderbar />
        <Merchant />
      </div>
    </div>
  );
}

export default App;
