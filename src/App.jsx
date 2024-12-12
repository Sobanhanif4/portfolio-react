// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
import Layout from "./pages/components/Layout";
import ProjectDetailPage from "./pages/ProjectDetailPage"; // Import the new ProjectDetailPage component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Use the Layout component to wrap the routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          
          {/* Add the dynamic route for project details */}
          <Route path="project/:projectId" element={<ProjectDetailPage />} />
          
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
