/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';

function AboutMe({ position, theme }) {
  const [current, setCurrent] = useState(0);

  return (
    <div
      className={`${theme} about_me`}
      style={{
        transform: `translate3d(${position === -1 ? '0' : '-150'}%, 0, 0)`,
        transition: 'all .8s ease',
      }}
    >
      <div className="left">
        {['Front-End', 'Back-End', 'Testing/Deploy', 'Dev Tools', 'Methodoligies'].map((title, idx) => (
          <div className={idx === current ? 'current' : null} onClick={() => setCurrent(idx)}>{title}</div>
        ))}
      </div>
      <div className="right">
        {[['JavaScript', 'TypeScript', 'React', 'ReactNative', 'HTML', 'CSS'],
          ['Node.JS', 'Express', 'PostgreSQL', 'MongoDB', 'MySQL', 'REST', 'FireBase'],
          ['K6', 'Loader.IO ', 'Jest', 'SuperTest', 'Mocha', 'Chai', 'AWS', 'DreamHost'],
          ['Vim', 'Git', 'NPM', 'Nx', 'Webpacl', 'Babel'],
          ['Scrum', 'Agile', 'TDD'],
        ].map((list, idx) => (
          <div
            style={{
              transform: `translateX(${(idx * 100) - (100 * current)}%)`,
              transition: ['all 0.7s ease'],
            }}
          >
            {list.map((item) => <small>{item}</small>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
