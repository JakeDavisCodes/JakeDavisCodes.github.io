import React from 'react';

function SliderItem({
  select, theme, item, focused,
}) {
  return (
    <div onClick={select} className={`${theme} ${focused ? 'focused' : ''} slider-item`}>
      {item.name}
    </div>
  );
}

export default SliderItem;
