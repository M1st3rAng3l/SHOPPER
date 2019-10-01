import React from 'react';
import HEADER from './components/header';
import BANNER from './components/banner';
import CAROUSEL from './components/carousel';
import TOPSELLER from './components/topSeller';
import DESC from './components/description';
import GALLERY from './components/galeria';
import FOOTER from './components/footer';
import './css/App.css'

function App() {
  return (
    <div>
      <div className="App">
      <HEADER/>
      <BANNER/>
      <CAROUSEL/>
      <TOPSELLER/>
      <DESC/>
      <GALLERY/>
      <FOOTER/>
      </div>
    </div>
  );
}

export default App;
