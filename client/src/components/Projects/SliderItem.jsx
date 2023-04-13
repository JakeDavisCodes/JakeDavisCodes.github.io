import React from 'react';

function SliderItem({
  select, theme, item, focused, transform,
}) {
  return (
    <img
      onClick={select}
      className={`${theme} ${focused ? 'focused' : ''} slider-item`}
      style={{ transform: `translate3d(${-transform}%, 0, 0) ${focused ? 'scale(1.3)' : 'scale(1)'}` }}
      src={`dist/images/${item.wideImgSrc}`}
      alt={item.name}
    />
  );
}

export default SliderItem;
