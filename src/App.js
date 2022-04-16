import React from 'react';
import Article from './components/article/Article';
import Brand from './components/brand/Brand';
import CTA from './components/cta/CTA';
import Feature from './components/feature/Feature';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
        <h1>This is Test</h1>
        <Article title="modern ui ux"/>
        <Brand />
        <CTA />
        <Feature />

    </div>
  );
}

export default App;
