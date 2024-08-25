import { Link } from 'react-router-dom';
import '../styles/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">sobanHanif.</div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
    </header>
  );
};

export default Header;
