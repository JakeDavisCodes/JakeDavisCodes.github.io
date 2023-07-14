import React, { useState, useEffect } from 'react';

function SliderItem({
  select, theme, item, focused, transform,
}) {
  const [details, setDetails] = useState(false);

  const handleClick = () => {
    if (focused) setDetails(!details);
  };

  useEffect(() => {
    setDetails(false);
  }, [focused]);

  return (
    <div
      onClick={handleClick}
      className={`item-container ${focused ? 'focused' : ''}`}
      style={{
        transform: `translate3d(${-transform}%, 0, 0) ${focused ? 'scale(1.5)' : 'scale(1)'}`,
        zIndex: focused ? 4 : 1,
      }}
    >
      <div
        className={`${theme} p-details`}
        style={{
          opacity: `${details ? 1 : 0}`,
          transform: `${details ? 'translateY(0%)' : 'translateY(100%)'}`,
        }}
      >
        <div className="upper">
          <p className="title">{item.name}</p>
          <p className="role">{item.role}</p>
        </div>
        <p className="summary">{item.about}</p>
        <p className="tech">{item.techStack}</p>
        <i className="gitIcon fa-brands fa-xl fa-github" onClick={() => window.open(item.git)} />
      </div>
      <img
        onClick={select}
        className={`${theme} ${focused ? 'focused' : ''} slider-item`}
        src={`client/dist/images/${item.wideImgSrc}.png`}
        alt={item.name}
      />
    </div>
  );
}

export default SliderItem;
