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
      }}
    >
      <div className="left">
        {['Front-End', 'Back-End', 'Testing/Deploy', 'Dev Tools', 'Methodoligies'].map((title, idx) => (
          <div key={title} className={idx === current ? 'current' : null} onClick={() => setCurrent(idx)}>{title + (idx === current ? ' •' : '')}</div>
        ))}
      </div>
      <div className="right">
        {[['Front-End Skills', 'JavaScript', 'TypeScript', 'React', 'ReactNative', 'HTML', 'CSS'],
          ['Back-End Skills', 'Node.JS', 'Express', 'PostgreSQL', 'MongoDB', 'MySQL', 'REST', 'FireBase'],
          ['Testing/Deploy', 'K6', 'Loader.IO ', 'Jest', 'SuperTest', 'Mocha', 'Chai', 'AWS', 'DreamHost'],
          ['Developer Tools', 'Vim', 'Git', 'NPM', 'Nx', 'Webpacl', 'Babel'],
          ['Methodoligies', 'Scrum', 'Agile', 'TDD'],
        ].map((list, idx) => (
          <div
            key={list[0]}
            className="skills"
            style={{
              opacity: `${current === idx ? 1 : 0}`,
              transform: `translateX(${current === idx ? 0 : 100}%)`,
            }}
          >
            <p>{list.shift()}</p>
            {list.map((item) => (
              <small key={item}>
                •
                {' '}
                {item}
              </small>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
