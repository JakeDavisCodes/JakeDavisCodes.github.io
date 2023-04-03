import React, { useState, useEffect } from 'react';

function Header({ theme, setTheme }) {
  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div id="header">
      <div className={`${theme} name`}>
        <p>Jacob</p>
        <p className="bold">ROYAL</p>
        <p>Davis</p>
      </div>
      <div id="sections-buttons">
        placeholder
      </div>
      {theme === 'light'
        ? <i className="moon-icon fa-2xl fa-solid fa-moon" onClick={handleClick} />
        : <i className="sun-icon fa-2xl fa-solid fa-sun" onClick={handleClick} />}
    </div>
  );
}

export default Header;
