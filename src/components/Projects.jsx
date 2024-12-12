import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "FoodyHub",
      description:
        "An intuitive food ordering platform with easy-to-navigate menus, and a seamless, mobile-friendly design.",
      image: "foodyHub1.png",
    },
    {
      title: "SuzCom-Ecom",
      description:
        "An e-commerce platform featuring eco-friendly products, with a smooth add-to-cart experience and full CRUD functionality for managing products.",
      image: "vanila_e_com.png",
    },
    {
      title: "PlumBuilders",
      description:
        "An interactive real estate platform with a sleek, user-friendly interface",
      image: "plumBuilders.png",
    },
    {
      title: "Blog-MERN",
      description:
        "A blog platform featuring real-time content updates, interactive comments, and easy navigation for readers to explore and engage with posts.",

      image: "mern_blogging.png",
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
