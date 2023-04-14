import React from 'react';

function SliderItem({
  select, theme, item, focused, transform,
}) {
  return (
    <div
      className={`item-container ${focused ? 'focused' : ''}`}
      style={{
        transform: `translate3d(${-transform}%, 0, 0) ${focused ? 'scale(1.5)' : 'scale(1)'}`,
        transition: 'all 0.4s ease',
        zIndex: focused ? 4 : 1,
      }}
    >
      <img
        onClick={select}
        className={`${theme} ${focused ? 'focused' : ''} slider-item`}
        src={`images/${item.wideImgSrc}.png`}
        alt={item.name}
      />
      <p className="project-details">
        More about this project?
      </p>
    </div>
  );
}

export default SliderItem;
