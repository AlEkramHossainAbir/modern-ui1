import React from 'react';
import Article from './components/article/Article';
import Brand from './components/brand/Brand';
import CTA from './components/cta/CTA';
import Feature from './components/feature/Feature';
import Navbar from './components/navbar/Navbar';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='gradient_bg '>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  );
}

export default App;
