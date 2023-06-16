import React, { useState } from 'react';

function Skill({ type, list }) {
  return (
    <div className="skill">
      <p>
        {type}
      </p>
      <small>{list.join(' | ')}</small>
    </div>
  );
}

function AboutMe({ position, theme }) {
  return (
    <div
      className={`${theme} about_me`}
      style={{
        transform: `translate3d(${position === -1 ? '0' : '-150'}%, 0, 0)`,
        transition: 'all 0.6s ease',
      }}
    >
      <div>
        <Skill type="Front-End" list={['JavaScript', 'TypeScript', 'React', 'ReactNative', 'HTML', 'CSS']} />
        <Skill type="Back-End" list={['Node.JS', 'Express', 'PostgreSQL', 'MongoDB', 'MySQL', 'REST', 'FireBase']} />
        <Skill type="Testing / Deployment" list={['K6', 'Loader.IO ', 'Jest', 'SuperTest', 'Mocha', 'Chai', 'AWS', 'DreamHost']} />
        <Skill type="Developer Tools" list={['Vim', 'Git', 'NPM', 'Nx', 'Webpacl', 'Babel']} />
        <Skill type="Methodoligies" list={['Scrum', 'Agile', 'TDD']} />
      </div>
    </div>
  );
}

export default AboutMe;
