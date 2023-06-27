/* eslint-disable no-alert */
import React from 'react';

function Contact({ position, theme }) {
  return (
    <div
      className={`${theme} contact`}
      style={{
        transform: `translate3d(${position === 1 ? '0' : '150'}%, 0, 0)`,
        transition: 'all .8s ease',
      }}
    >
      PH
    </div>
  );
}

export default Contact;
