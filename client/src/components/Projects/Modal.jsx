import React, { useEffect } from 'react';

function Modal({ theme, project, setProject }) {
  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('class', `${theme} ${project.name ? 'lock' : ''}`);

    const e = document.getElementById('projects');
    const y = e.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, [project]);

  return (
    <div className={`${theme} project-modal ${project.name ? 'visible' : ''}`}>
      <div className={`${theme} main`}>
        <img
          className="tall-img"
          src={`images/${project.tallImgSrc}.png`}
          alt={project.name}
        />
        <div className="text">
          <div className="top">
            <p className="title">{project.name}</p>
            <p className="role">
              {' '}
              -
              {' '}
              {project.role}
            </p>
          </div>
          <p className="summary">{project.about}</p>
          <p className="stack">{project.techStack}</p>
          <p className="details">{project.details}</p>
        </div>
      </div>
      <div className="bg" onClick={() => setProject({})} />
    </div>
  );
}

export default Modal;
