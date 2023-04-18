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
        Hello World
      </div>
      <div className="bg" onClick={() => setProject({})} />
    </div>
  );
}

export default Modal;
