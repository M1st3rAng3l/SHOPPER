import React from 'react';
import HEADER from './components/header';
import BANNER from './components/banner';
import CAROUSEL from './components/carousel';
import TOPSELLER from './components/topSeller';
import './css/App.css'

function App() {
  return (
    <div>
      <div className="App">
      <HEADER/>
      <BANNER/>
      <CAROUSEL/>
      <TOPSELLER/>
      </div>
     
    </div>
  );
}

export default App;
