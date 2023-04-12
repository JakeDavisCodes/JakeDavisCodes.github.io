import React from 'react';

function Slider({ theme, data }) {
  return (
    <div className={`${theme} slider`}>
      {data.map((item) => <p>{item.name}</p>)}
    </div>
  );
}

export default Slider;
