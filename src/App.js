import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Siderbar from './components/sidebar/sidebar';
import Routes from './router'
import Merchant from './pages/merchant/merchant';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='item'>
        <Siderbar className="sider-bar-layout" />
        <Routes className="items-layout"/>
      </div>
    </div>
  );
}

export default App;
