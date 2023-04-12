import React from 'react';

function SliderItem({ theme, item, focused }) {
  return (
    <div className={`${theme} ${focused ? 'focused' : ''} slider-item`}>
      {item.name}
    </div>
  );
}

export default SliderItem;
