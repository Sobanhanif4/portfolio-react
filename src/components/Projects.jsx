import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "TaskFlow",
      description:
        "Task management system with drag-and-drop, real-time collaboration, and responsive layout.",
      image: "minepic.png",
    },
    {
      title: "EcoCart",
      description:
        "E-commerce platform promoting eco-friendly products with payment integration.",
      image: "minepic.png",
    },
    {
      title: "EventPlanner",
      description:
        "Event planning web application, enabling users to organize and manage events effortlessly.",
      image: "minepic.png",
    },
    {
      title: "FoodieFinder",
      description:
        "Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings.",
      image: "minepic.png",
    },
  ];

  const limitedProjects = projects.slice(0, 2);
  const limitedProjects2 = projects.slice(2, 5);

  return (
    <>
      <h2 className="projects-h2">
        Projects<span className="projects-dot">.</span>
      </h2>
      <section className="projects-section">
        <div className="projects-grid">
          {limitedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="projects-grid-sep-products">
          {limitedProjects2.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
