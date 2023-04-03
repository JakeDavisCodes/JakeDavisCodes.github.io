import React, { useState, useEffect } from 'react';

import Header from './Header/index.jsx'
import About from './About/index.jsx';
import Projects from './Projects/index.jsx';
import More from './More/index.jsx';

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div id="app">
      <div id="line"/>
      <Header theme={theme} setTheme={setTheme} />
      <About theme={theme} />
      <Projects theme={theme} />
      <More theme={theme} />
    </div>
  );
}

export default App;
