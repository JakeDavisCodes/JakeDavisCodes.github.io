import React from 'react';

function Header({ theme, setTheme }) {
  const handleClick = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.getElementsByTagName('html')[0].setAttribute('class', newTheme);
  };

  return (
    <div id="header" className={theme}>
      <div id="bg" className={theme} />
      <div className={`${theme} name`}>
        <p>Jacob</p>
        <p className="bold">ROYAL</p>
        <p>Davis</p>
      </div>
      <div id="sections-buttons">
        <div className="fix-border section-button">About</div>
        <div className="section-button">Projects</div>
        <div className="section-button">More</div>
      </div>
      <i className={`${theme === 'light' ? 'moon-icon' : 'sun-icon'} fa-2xl fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`} onClick={handleClick} />
    </div>
  );
}

export default Header;
