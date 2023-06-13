import React from 'react';
import { scrollTo } from '../reusable.js';

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
      <div className={`tiny_text section_text ${theme}`}>About</div>
      <p onClick={() => scrollTo('projects')} className={`lead tiny_text section_text ${theme}`}>Care to see some of my work?</p>
    </div>
  );
}

export default About;
