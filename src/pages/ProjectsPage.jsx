import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/ProjectsPage.css"; // Import CSS styles

const projects = [
  {
    id: 1,
    title: "FoodieFinder",
    description:
      "Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings.",
    imageUrl: "public/foodyHub1.png",
  },
  {
    id: 2,
    title: "EventPlanner",
    description:
      "Event planning web application, enabling users to organize and manage events effortlessly.",
    imageUrl: "vanila_e_com.png",
  },
  {
    id: 3,
    title: "EcoCart",
    description:
      "E-commerce platform promoting eco-friendly products with payment integration.",
    imageUrl: "plumBuilders.png",
  },
  {
    id: 4,
    title: "TaskFlow",
    description:
      "Task management system with drag-and-drop, real-time collaboration, and responsive layout.",
    imageUrl: "mern_blogging.png",
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
        <div className="productPage-h1-p">
          <h1 className="productPage-h1">
            My <span>Best</span> Creations
          </h1>
          <p className="productPage-p">
            Designing and Developing Robust and Stylish Web Applications for a
            Decade and Counting
          </p>
        </div>
        {projects.map((project, index) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <div
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
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
