import React, { useState } from 'react';

function Selector({ select, options, current }) {
  const [hov, setHov] = useState(current);

  const onEnter = (idx) => {
    setHov(idx);
  };
  const onLeave = () => {
    setHov(current);
  };

  return (
    <div className="selector_container">
      <div className="dots">
        {new Array(options).fill(0).map((p, idx) => (
          <i
            key={`Selector${idx}`}
            onClick={() => select(idx)}
            onMouseEnter={() => onEnter(idx)}
            onMouseLeave={onLeave}
            className={`dot fa-${idx === current ? 'solid' : 'regular'} fa-circle-dot`}
          />
        ))}
      </div>
      <i
        style={{
          transform: `translateX(${hov * (168)}%)`,
        }}
        className="caret fa-solid fa-caret-up"
      />
    </div>
  );
}

export default Selector;
