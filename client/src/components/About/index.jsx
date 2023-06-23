import React from 'react';
import { scrollTo } from '../reusable.js';

function About({ theme }) {
  return (
    <div className="page_section big_text" id="about">
      <img
        src="images/Me.jpeg"
        alt="A dazzling photograph of me should be here"
      />
      <div className={`tiny_text section_text ${theme}`}>About</div>
    </div>
  );
}

export default About;
