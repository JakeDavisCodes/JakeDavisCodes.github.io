import React, { useState } from 'react';

import Header from './Header/index.jsx';
import About from './About/index.jsx';
import Projects from './Projects/index.jsx';
import More from './More/index.jsx';
import Footer from './Footer.jsx';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div id="app">
      <div id="bg" className={theme} />
      <div id="line" />
      <Header theme={theme} setTheme={setTheme} />
      <About theme={theme} />
      <Projects theme={theme} />
      <More theme={theme} />
      {/* <Footer theme={theme} /> */}
    </div>
  );
}

export default App;
