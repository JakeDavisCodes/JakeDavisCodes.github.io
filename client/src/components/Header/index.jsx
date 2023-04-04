import React from 'react';

function Header({ theme, setTheme }) {
  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
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
      <i className={`${theme === 'light' ? 'moon-icon' : 'sun-icon'} fa-2xl fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`} onClick={handleClick} />
    </div>
  );
}

export default Header;
