// src/pages/ProjectsPage.jsx
import React from 'react';
import ProjectCard from "../components/ProjectCard";  // Import ProjectCard
import "../styles/Projects.css";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "FoodyHub",
      description:
        "An intuitive food ordering platform with easy-to-navigate menus, and a seamless, mobile-friendly design.",
      image: "foodyHub1.png",
    },
    {
      id: 2,
      title: "SuzCom-Ecom",
      description:
        "An e-commerce platform featuring eco-friendly products, with a smooth add-to-cart experience and full CRUD functionality for managing products.",
      image: "vanila_e_com.png",
    },
    {
      id: 3,
      title: "PlumBuilders",
      description:
        "An interactive real estate platform with a sleek, user-friendly interface",
      image: "plumBuilders.png",
    },
    {
      id: 4,
      title: "Blog-MERN",
      description:
        "A blog platform featuring real-time content updates, interactive comments, and easy navigation for readers to explore and engage with posts.",
      image: "mern_blogging.png",
    },
  ];

  const limitedProjects = projects.slice(0, 2); // First 2 projects
  const limitedProjects2 = projects.slice(2, 5); // Next 2 projects

  return (
    <>
      <h2 className="projects-h2">
        Projects<span className="projects-dot">.</span>
      </h2>
      <section className="projects-section">
        <div className="projects-grid">
          {limitedProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />  
          ))}
        </div>
        
        <div className="projects-grid-sep-products">
          {limitedProjects2.map((project) => (
            <ProjectCard key={project.id} {...project} />  
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
