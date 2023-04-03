import React, { useState, useEffect } from 'react';

import HackerText from './HackerText.jsx';

const textArray = [
  'Full-Stack Developer',
  'Front-End Engineer',
  'Back-End Specialist',
  'Software Developer',
  'Fast Learner',
];

function About() {
  return (
    <div className="page_section big_text" id="about">
      <HackerText textArray={textArray} />
    </div>
  );
}

export default About;
