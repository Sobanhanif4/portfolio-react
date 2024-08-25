// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import Projects from "./components/Projects";
// import Experience from "./components/Experience";
// import Skills from "./components/Skills";
// import Story from "./components/Story";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <HeroSection />
//         <Projects />
//         <Experience />
//         <Skills />
//         <Story />
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;



// src/App.jsx
// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
