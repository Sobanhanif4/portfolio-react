// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import '../styles/ProjectCard.css';

const ProjectCard = ({ id, title, description, image }) => {
  return (
    <Link to={`/project/${id}`} className="project-card-link"> {/* Adding Link for routing */}
      <div className="project-card">
        <img src={image} alt={title} className="projects-image" />
        <h3>{title}</h3>
        <p className="projectCard-p">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
