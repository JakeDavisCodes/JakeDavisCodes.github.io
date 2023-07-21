import React from 'react';
import { scrollTo } from '../reusable.js';

function Header({ theme, setTheme }) {
  const handleClick = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.getElementsByTagName('html')[0].setAttribute('class', newTheme);
  };

  return (
    <div id="header" className={theme}>
      <div id="bg" className={theme} />

      {/* Home Button */}
      <div onClick={() => scrollTo('home')} className={`${theme} name`}>
        <p>Jacob</p>
        <p className="bold">ROYAL</p>
        <p>Davis</p>
      </div>

      {/* Section Buttons */}
      <div id="sections-buttons">
        <div onClick={() => scrollTo('about')} className={`${theme} fix-border section-button`}>About</div>
        <div onClick={() => scrollTo('projects')} className={`${theme} section-button`}>Projects</div>
        <div onClick={() => scrollTo('more')} className={`${theme} section-button`}>More</div>
      </div>

      {/* Theme Change */}
      <i className={`${theme === 'light' ? 'moon-icon' : 'sun-icon'} fa-2xl fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`} onClick={handleClick} />
    </div>
  );
}

export default Header;
