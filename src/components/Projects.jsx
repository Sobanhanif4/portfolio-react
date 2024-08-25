import ProjectCard from "./ProjectCard";
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'TaskFlow',
      description: 'Task management system with drag-and-drop, real-time collaboration, and responsive layout.',
      image: 'path/to/taskflow-image.jpg'
    },
    {
      title: 'EcoCart',
      description: 'E-commerce platform promoting eco-friendly products with payment integration.',
      image: 'path/to/ecocart-image.jpg'
    },
    {
      title: 'EventPlanner',
      description: 'Event planning web application, enabling users to organize and manage events effortlessly.',
      image: 'path/to/eventplanner-image.jpg'
    },
    {
      title: 'FoodieFinder',
      description: 'Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings.',
      image: 'path/to/foodiefinder-image.jpg'
    }
  ];

  return (
    <section className="projects-section">
      <h2>Projects.</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
