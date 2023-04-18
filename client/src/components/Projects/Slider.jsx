import React, { useState } from 'react';
import Item from './SliderItem.jsx';
import Modal from './Modal.jsx';

function Slider({ theme, data, setProject }) {
  const [index, setIndex] = useState(0);

  const select = (item, idx) => {
    if (idx === index) setProject(item);
    else setIndex(idx);
  };

  return (
    <div className={`${theme} slider`}>
      {data.map((item, idx) => (
        <Item
          select={() => select(item, idx)}
          theme={theme}
          item={item}
          focused={idx === index}
          transform={(index * 110) - 80}
        />
      ))}
    </div>
  );
}

export default Slider;
