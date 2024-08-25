import React, { useEffect } from 'react';
import Fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';

const projects = [
  /* Your project data */
];

function ProjectSlide({ project }) {
  return (
    <div className="section">
      <div className="project-content">
        <img src={project.imageUrl} alt={project.title} className="project-image" />
        <div className="project-info">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}

function ProjectsPage() {
  useEffect(() => {
    new Fullpage('#fullpage', {
      /* Fullpage.js options */
      autoScrolling: true,
      scrollHorizontally: true,
    });

    return () => Fullpage.destroy('all');
  }, []);

  return (
    <div id="fullpage">
      {projects.map((project) => (
        <ProjectSlide key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectsPage;
