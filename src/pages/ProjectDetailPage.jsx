// src/pages/ProjectDetailPage.js
import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the project ID from the URL

// Sample data (you can fetch this from an API or use a more dynamic method)
const projects = [
  {
    id: 1,
    title: "FoodieFinder",
    description:
      "Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings.",
    imageUrl: "foodyHub1.png",
    technologies: ["React", "Node.js", "MongoDB"],
    moreInfo:
      "FoodieFinder uses modern UI techniques and integrates real-time data for restaurant reviews, making it easy for users to find the best dining options in their area.",
  },
  {
    id: 2,
    title: "EventPlanner",
    description:
      "Event planning web application, enabling users to organize and manage events effortlessly.",
    imageUrl: "vanila_e_com.png",
    technologies: ["React", "Firebase", "Express"],
    moreInfo:
      "EventPlanner simplifies event management by allowing users to create and track events, manage guest lists, and send invitations.",
  },
  {
    id: 3,
    title: "EcoCart",
    description:
      "E-commerce platform promoting eco-friendly products with payment integration.",
    imageUrl: "plumBuilders.png",
    technologies: ["React", "Stripe API", "Node.js"],
    moreInfo:
      "EcoCart aims to provide a sustainable shopping experience, offering eco-friendly products from vendors that prioritize sustainability.",
  },
  {
    id: 4,
    title: "TaskFlow",
    description:
      "Task management system with drag-and-drop, real-time collaboration, and responsive layout.",
    imageUrl: "mern_blogging.png",
    technologies: ["React", "MongoDB", "Express", "Node.js"],
    moreInfo:
      "TaskFlow is a task management tool that offers team collaboration features, including real-time updates and drag-and-drop functionality.",
  },
];

const ProjectDetailPage = () => {
  const { projectId } = useParams(); // Get projectId from URL
  const project = projects.find((p) => p.id === parseInt(projectId)); // Find the project by ID

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} className="project-detail-image" />
      <p>{project.description}</p>
      <h3>Technologies Used:</h3>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <h3>More Info:</h3>
      <p>{project.moreInfo}</p>
    </div>
  );
};

export default ProjectDetailPage;
