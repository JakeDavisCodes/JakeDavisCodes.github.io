import React, { useState, useEffect } from 'react';

import Header from './Header/index.jsx'
import About from './About/index.jsx';
import Projects from './Projects/index.jsx';
import More from './More/index.jsx';

function App() {
  return (
    <div id="app">
      <div id="line"/>
      <Header />
      <About />
      <Projects />
      <More />
    </div>
  );
}

export default App;
