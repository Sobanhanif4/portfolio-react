import { Link } from "react-router-dom";
import "../styles/Footer.css";
import CtaButton from "./CtaButton";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <Link to="/" className="footer-link">
          Home
        </Link>
        <Link to="/projects" className="footer-link">
          Projects
        </Link>
        <Link to="/about" className="footer-link">
          About
        </Link>
        <Link to="/contact" className="footer-link">
          Contact
        </Link>
      </div>
      
      <div className="social-icons">
        {/* Add your social media icons here */}
        <a href="#" className="social-icon">
          LinkedIn Icon
        </a>
        <a href="#" className="social-icon">
          GitHub Icon
        </a>
        <a href="#" className="social-icon">
          Twitter Icon
        </a>
      </div>
      <div className="cta-footer">
        <p className="cta-p">Interested in working together?</p>
        <CtaButton />
      </div>
      <div className="footer-copy">
        <p className="footer-copy-p">©2023 All Rights Reserved. Made with by Soban Hanif</p>
      </div>
    </footer>
  );
};

export default Footer;
