import React from 'react';
import Slider from './Slider.jsx';
import projects from './projects.js';

function Projects({ theme }) {
  return (
    <div className="page_section big_text" id="projects">
      <div className={`tiny_text section_text ${theme}`}>My work</div>
      <Slider theme={theme} data={projects} />
    </div>
  );
}

export default Projects;
