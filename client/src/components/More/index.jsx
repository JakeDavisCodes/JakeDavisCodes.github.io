import React, { useState } from 'react';

import Contact from './Contact.jsx';

function More({ theme }) {
  const [selected, setSelected] = useState('b2');

  const handleClick = (target) => {
    setSelected(target === selected ? null : target);
  };

  return (
    <div className={`${theme} page_section big_text`} id="more">
      <div className="secret">Please Hire me!</div>
      <button onClick={() => handleClick('b1')} className={selected === 'b1' ? 'selected' : null} id="b1">More About Me</button>
      <button onClick={() => handleClick('b2')} className={selected === 'b2' ? 'selected' : null} id="b2">Contact Me</button>
      <div className="bottom">
        <Contact theme={theme} />
      </div>
    </div>
  );
}

export default More;
