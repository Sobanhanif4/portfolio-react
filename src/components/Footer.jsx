import { Link, useLocation } from "react-router-dom";
import "../styles/Footer.css";
import CtaButton from "./CtaButton";

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <footer className="footer">
      <div className="footer-nav">
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
        <Link
          to="/contact"
          className={`footer-link ${
            currentPath === "/contact" ? "active" : " "
          }`}
        >
          Contact
        </Link>
      </div>

      <div className="social-icons">
        {/* Add your social media icons here */}
        <a href="https://www.linkedin.com/in/sobanhanif/" className="social-icon" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M7.738,17L7.738,17 c-0.697,0-1.262-0.565-1.262-1.262v-4.477C6.477,10.565,7.042,10,7.738,10h0C8.435,10,9,10.565,9,11.262v4.477 C9,16.435,8.435,17,7.738,17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2 S8.551,8.717,7.694,8.717z M16.779,17L16.779,17c-0.674,0-1.221-0.547-1.221-1.221v-2.605c0-1.058-0.651-1.174-0.895-1.174 s-1.058,0.035-1.058,1.174v2.605c0,0.674-0.547,1.221-1.221,1.221h-0.081c-0.674,0-1.221-0.547-1.221-1.221v-4.517 c0-0.697,0.565-1.262,1.262-1.262h0c0.697,0,1.262,0.565,1.262,1.262c0,0,0.282-1.262,2.198-1.262C17.023,10,18,10.977,18,13.174 v2.605C18,16.453,17.453,17,16.779,17z"></path>
          </svg>
        </a>
        <a href="
        https://github.com/Sobanhanif4" className="social-icon" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 10 72 72"
          >
            <path d="M 36 12 C 22.745 12 12 22.745 12 36 C 12 49.255 22.745 60 36 60 C 49.255 60 60 49.255 60 36 C 60 22.745 49.255 12 36 12 z M 36 20 C 44.837 20 52 27.163 52 36 C 52 43.284178 47.128298 49.420174 40.46875 51.355469 C 40.198559 51.103128 39.941627 50.74363 39.953125 50.285156 C 39.980125 49.233156 39.953125 46.778953 39.953125 45.876953 C 39.953125 44.328953 38.972656 43.230469 38.972656 43.230469 C 38.972656 43.230469 46.654297 43.316141 46.654297 35.119141 C 46.654297 31.957141 45.003906 30.310547 45.003906 30.310547 C 45.003906 30.310547 45.872125 26.933953 44.703125 25.501953 C 43.393125 25.359953 41.046922 26.753297 40.044922 27.404297 C 40.044922 27.404297 38.457406 26.753906 35.816406 26.753906 C 33.175406 26.753906 31.587891 27.404297 31.587891 27.404297 C 30.586891 26.753297 28.239687 25.360953 26.929688 25.501953 C 25.760688 26.933953 26.628906 30.310547 26.628906 30.310547 C 26.628906 30.310547 24.974609 31.956141 24.974609 35.119141 C 24.974609 43.316141 32.65625 43.230469 32.65625 43.230469 C 32.65625 43.230469 31.782197 44.226723 31.693359 45.652344 C 31.180078 45.833418 30.48023 46.048828 29.8125 46.048828 C 28.2025 46.048828 26.978297 44.483766 26.529297 43.759766 C 26.086297 43.045766 25.178031 42.447266 24.332031 42.447266 C 23.775031 42.447266 23.503906 42.726922 23.503906 43.044922 C 23.503906 43.362922 24.285781 43.585781 24.800781 44.175781 C 25.887781 45.420781 25.866281 48.21875 29.738281 48.21875 C 30.196553 48.21875 31.021102 48.11542 31.677734 48.025391 C 31.674106 48.90409 31.663893 49.74536 31.677734 50.285156 C 31.688158 50.700354 31.476914 51.032045 31.236328 51.279297 C 24.726159 49.25177 20 43.177886 20 36 C 20 27.163 27.163 20 36 20 z"></path>
          </svg>
        </a>
        <a href="https://www.facebook.com/soban.atban/" className="social-icon" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
          </svg>
        </a>
      </div>
      <div className="cta-footer">
        <p className="cta-p">
          Interested in working together <span className="cta-p-span">?</span>
        </p>
        <CtaButton />
      </div>
      <div className="footer-copy">
        <p className="footer-copy-p">
          ©2024 All Rights Reserved. Made by <span className="footer-copy-p-span">Soban Hanif ♠️</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
