// src/components/ProjectCard.jsx
import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="projects-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
