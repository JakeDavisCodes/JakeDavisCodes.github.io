import React, { useState } from 'react';
import Item from './SliderItem.jsx';

function Slider({ theme, data }) {
  const [index, setIndex] = useState(0);

  return (
    <div className={`${theme} slider`}>
      {data.map((item, idx) => (
        <Item
          select={() => { console.log(index === idx); setIndex(idx); }}
          theme={theme}
          item={item}
          focused={idx === index}
          transform={(index * 110) - 40}
        />
      ))}
    </div>
  );
}

export default Slider;
