import React, { useState } from 'react';
import Item from './SliderItem.jsx';

function Slider({ theme, data }) {
  const [index, setIndex] = useState(0);

  return (
    <div className={`${theme} slider`}>
      {data.map((item, idx) => (
        <Item
          select={() => setIndex(idx)}
          theme={theme}
          item={item}
          focused={idx === index}
        />
      ))}
    </div>
  );
}

export default Slider;
