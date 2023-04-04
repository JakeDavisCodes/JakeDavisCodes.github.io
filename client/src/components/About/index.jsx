import React from 'react';

import HackerText from './HackerText.jsx';

const textArray = [
  'Full-Stack Developer',
  'Front-End Engineer',
  'Back-End Developer',
  'Software Engineer',
  'Fast Learner',
  'Team Player',
];

function About() {
  return (
    <div className="page_section big_text" id="about">
      <p>Hello,</p>
      <p>My name is Jake</p>
      <HackerText textArray={textArray} />
    </div>
  );
}

export default About;
