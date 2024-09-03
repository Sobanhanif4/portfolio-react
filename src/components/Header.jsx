import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

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
    </header>
  );
};

export default Header;
