import React, { useState } from 'react';
import Slider from './Slider.jsx';
import Modal from './Modal.jsx';

import projects from './projects.js';

function Projects({ theme }) {
  const [project, setProject] = useState({});

  return (
    <div className="page_section big_text" id="projects">
      <div className={`tiny_text section_text ${theme}`}>My work</div>
      <Slider setProject={setProject} theme={theme} data={projects} />
      <Modal project={project} setProject={setProject} theme={theme} />
    </div>
  );
}

export default Projects;
