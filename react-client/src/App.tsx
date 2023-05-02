import React from 'react';
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const [sidebar, setSidebar] = useState<boolean>(false);

  return (
    <div className="App">
      <Header sidebar={sidebar} setSidebar={setSidebar}/>
      <Home sidebar={sidebar} />
      <Footer />
    </div>
  );
}

export default App;
