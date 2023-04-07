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

function About({ theme }) {
  return (
    <div className="page_section big_text" id="about">
      <p>Hello,</p>
      <p>My name is Jake</p>
      <HackerText theme={theme} textArray={textArray} />
      <p className="tiny_text section_text">About me</p>
    </div>
  );
}

export default About;
