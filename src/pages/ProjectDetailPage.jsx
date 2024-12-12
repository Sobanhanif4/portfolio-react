import React from "react";
import { useParams } from "react-router-dom";
import '../styles/ProjectDetailPage.css';

const projects = [
    {
        id: 1,
        title: "FoodyHub",
        description:
            "FoodieHub is a modern, user-friendly restaurant discovery platform that enables users to easily search for restaurants based on location, cuisine, and ratings. The platform features an intuitive and responsive user interface designed to provide a seamless browsing experience. With a focus on simplicity and ease of use, FoodyHub allows users to quickly find their ideal dining options without any distractions. The clean and elegant design ensures a smooth and engaging experience, making restaurant discovery both enjoyable and efficient."
        ,
        imageUrls: ["/foodyHub1.png", "/foodyHub2.png", "/foodyHub3Mob.png"],
        technologies: ["React", "Node.js", "Firebase"],
        moreInfo:
            "FoodyHub leverages modern UI techniques to create a sleek and intuitive experience for users. By prioritizing user experience, FoodyHub ensures that every search is fast, easy, and effective, allowing users to effortlessly explore and find the best dining options in their area, all within a visually appealing and responsive interface."

    },
    {
        id: 2,
        title: "SuzCom-E-com",
        description:
            "This e-commerce platform offers a seamless shopping experience with a beautifully crafted interface. Users can easily browse products, add them to their cart, and adjust quantities as needed. The platform allows users to modify product quantities directly from the cart, with real-time updates, eliminating the need to navigate back to individual product pages. This ensures a smooth, user-friendly shopping experience, where pricing is instantly updated as users adjust their cart items. The system is designed for efficiency and simplicity, providing a hassle-free online shopping journey.",
        imageUrls: ["/vanila_e_com.png", "/vanila_e_com2.png", "/vanila_e_com3.png", "/vanila_e_com4.png", "/vanila_e_com5.png"],
        technologies: ["Vanilla JS", "Local Storage"],
        moreInfo:
            "This platform emphasizes a smooth, intuitive shopping experience, enabling users to quickly browse and manage products. By providing real-time updates in the cart and an easy-to-navigate interface, users can focus on shopping without interruptions. The design ensures that every interaction is quick and seamless, offering a pleasant and efficient online shopping experience."
    },
    
    {
        id: 3,
        title: "Plum Builder",
        description:
            "Plum Builders platform offers a clean and modern user interface with a sleek design, focused on providing an effortless property browsing experience. The platform features an interactive property slider, allowing users to easily navigate through a variety of properties. The UI is crafted to be intuitive, ensuring that users can explore property listings with ease. Whether users are looking for residential or commercial spaces, this platform presents the properties in a visually appealing way, making it ideal for anyone seeking to explore real estate options. The responsive design ensures smooth functionality across different devices, providing users with a seamless experience on both desktop and mobile devices. This project emphasizes simplicity and design, focusing on the core task of presenting properties in a user-friendly manner."
        ,

        imageUrls: ["/plumBuilders.png", "/plumBuilders2.png", "/plumBuilders3.png"], // Just one image here
        technologies: ["HTML", "CSS", "JavaScript"],
        moreInfo:
            "This real estate platform offers a seamless property browsing experience, combining modern UI design with an intuitive layout. Users can easily navigate through various property listings using an interactive slider, making it simple to explore available options. It provides an elegant, responsive design that adapts seamlessly to different devices, offering a smooth and engaging experience whether on desktop or mobile. The platform focuses purely on presenting properties in a user-friendly manner, making it a valuable tool for those looking to explore real estate options."
        ,
    },
    {
        id: 4,
        title: "MERN Full Stack Blogging",
        description:
            "A full-stack blogging platform built using the MERN stack (MongoDB, Express, React, Node.js). This platform allows users to create, read, update, and delete blog posts with ease. The clean and responsive UI ensures a smooth experience on both desktop and mobile devices. Users can sign up, log in, and manage their blog posts, with the ability to comment on and interact with other users' posts. With an intuitive design and real-time updates, this platform offers a modern, fully-functional blogging experience.",
        imageUrls: ["/mern_blogging.png", "/mern_blogging2.png", "/mern_blogging3.png"],
        technologies: ["React", "MongoDB", "Express", "Node.js"],
        moreInfo:
            "This platform is designed to provide a full blogging experience, allowing users to manage their content effortlessly. It supports CRUD (Create, Read, Update, Delete) operations for blog posts, offering users the ability to add, edit, and delete their content. With real-time updates, users can see changes and interact with posts instantly. Built with the MERN stack, this project demonstrates the power and flexibility of combining MongoDB, Express, React, and Node.js to create a dynamic, scalable web application."
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
            <h1 className="project-det-h1">{project.title}</h1>
            <img
                src={project.imageUrls[0]}
                alt={`${project.title} main image`}
                className="project-detail-image"
            />


            <p className="project-det-p">{project.description}</p>

            <img
                src={project.imageUrls[1]}
                alt={`${project.title} middle image`}
                className="project-detail-image"
            />

            <h3 className="project-det-h3">Technologies Used:</h3>
            <ul>
                {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>

            <h3 className="project-det-moreInfo">More Info:</h3>
            <p className="project-det-moreInfo-p">{project.moreInfo}</p>
            <img
                src={project.imageUrls[2]}
                alt={`${project.title} end image`}
                className="project-detail-image"
                style={project.id === 1 ? { width: '30%', height: 'auto', display: "flex", alignItems: "center"} : {}}
            />
        </div>
    );
};

export default ProjectDetailPage;
