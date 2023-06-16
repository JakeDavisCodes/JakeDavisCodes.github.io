import React, { useState } from 'react';

function AboutMe({ position, theme }) {
  return (
    <div
      className={`${theme} about_me`}
      style={{
        transform: `translate3d(${position === -1 ? '0' : '-150'}%, 0, 0)`,
        transition: 'all 0.6s ease',
      }}
    >
      PH
    </div>
  );
}

export default AboutMe;
