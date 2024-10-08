import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import { MdOutlineContactPhone } from "react-icons/md";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="header">
      <div className="logo">sobanH.</div>
      <nav className="nav">
        <Link
          to="/"
          className={`footer-link ${currentPath === "/" ? "active" : " "}`}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={`footer-link ${
            currentPath === "/projects" ? "active" : " "
          }`}
        >
          Projects
        </Link>
        <Link
          to="/about"
          className={`footer-link ${currentPath === "/about" ? "active" : " "}`}
        >
          About
        </Link>
      </nav>
      <div className="">
        <Link
          to="/contact"
          className={`footer-link ${
            currentPath === "/contact" ? "active" : " "
          }`}
        >
          <MdOutlineContactPhone className="contact-nav-link"/>
        </Link>
      </div>
    </header>
  );
};

export default Header;
