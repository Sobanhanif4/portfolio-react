// src/pages/ProjectsPage.jsx
import React, { useRef, useEffect } from "react";
import "../styles/ProjectsPage.css"; // Import CSS styles

const projects = [
  {
    id: 1,
    title: "FoodieFinder",
    description:
      "Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings.",
    imageUrl: "minepic.png",
  },
  {
    id: 2,
    title: "EventPlanner",
    description:
      "Event planning web application, enabling users to organize and manage events effortlessly.",
    imageUrl: "minepic.png",
  },
  {
    id: 3,
    title: "EcoCart",
    description:
      "E-commerce platform promoting eco-friendly products with payment integration.",
    imageUrl: "minepic.png",
  },
  {
    id: 4,
    title: "TaskFlow",
    description:
      "Task management system with drag-and-drop, real-time collaboration, and responsive layout.",
    imageUrl: "minepic.png",
  },
];

const ProjectsPage = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const slideHeight = window.innerHeight;

      projects.forEach((_, index) => {
        const projectSlide = projectRefs.current[index];
        if (!projectSlide) return; // Prevent errors if the ref is not yet set

        if (
          scrollTop >= slideHeight * index &&
          scrollTop < slideHeight * (index + 1)
        ) {
          projectSlide.classList.add("active");
        } else {
          projectSlide.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      
      <div className="projects-page">
      <h1 className="productPage-h1">My <span>Best</span> Creations</h1>
      <p className="productPage-p">Designing and Developing Robust and Stylish Web Applications for a Decade and Counting</p>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-slide"
            ref={(el) => (projectRefs.current[index] = el)}
          >
            <div className="project-content">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
