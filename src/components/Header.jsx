import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import { MdOutlineContactPhone } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">sobanH.</div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation links */}
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={`footer-link ${currentPath === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={`footer-link ${currentPath === "/projects" ? "active" : ""}`}
        >
          Projects
        </Link>
        <Link
          to="/about"
          className={`footer-link ${currentPath === "/about" ? "active" : ""}`}
        >
          About
        </Link>
      </nav>

      {/* Contact Link */}
      <div className="contact-link">
        <Link
          to="/contact"
          className={`footer-link ${currentPath === "/contact" ? "active" : ""}`}
        >
          <MdOutlineContactPhone className="contact-nav-link" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
