import React, { useState } from 'react';

import Contact from './Contact.jsx';

function More({ theme }) {
  const [position, setPos] = useState(1);

  const handleClick = (target) => {
    setPos(target === position ? null : target);
  };

  return (
    <div className={`${theme} page_section big_text`} id="more">
      <div className="secret">Please Hire me!</div>
      <button onClick={() => handleClick(-1)} className={position === -1 ? 'selected' : null} id="b1">More About Me</button>
      <button onClick={() => handleClick(1)} className={position === 1 ? 'selected' : null} id="b2">Contact Me</button>
      <div className="bottom">
        <Contact position={position} theme={theme} />
      </div>
    </div>
  );
}

export default More;
