import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='middle-container'>
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
