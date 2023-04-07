import React from 'react';

function Projects({ theme }) {
  return (
    <div className="page_section big_text" id="projects">
      Projects
      <div className={`tiny_text section_text ${theme}`}>My work</div>
    </div>
  );
}

export default Projects;
