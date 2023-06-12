import React, { useState } from 'react';

function More({ theme }) {
  const [selected, setSelected] = useState();

  const handleClick = (target) => {
    setSelected(target === selected ? null : target);
  };

  return (
    <div className={`${theme} page_section big_text`} id="more">
      <div className="secret">{'Hey dont steal my contact info >:('}</div>
      <button onClick={() => handleClick('b1')} className={selected === 'b1' ? 'selected' : null} id="b1">More About Me</button>
      <button onClick={() => handleClick('b2')} className={selected === 'b2' ? 'selected' : null} id="b2">Contact Me</button>
    </div>
  );
}

export default More;
