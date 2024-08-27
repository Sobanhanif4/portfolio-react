import Story from "../components/Story";
import "../styles/AboutPage.css"; // Import CSS styles
import Globe from "./components/Globe";

const AboutPage = () => {
  return (
    <>
      
      <section>
      
        <h1>About me.</h1>
        <p>
        <Globe />
          Developing beautiful and functional websites is what I love doing, and
          that's why I give my all in every new challenge.
        </p>

        <h4>My Stack</h4>

        <div id="scroll-container">
          {/* Row moving from left to right */}
          <div className="scroll-row scroll-row-left">
            <span className="scroll-text">Responsive Design</span>
            <span className="star-icon">★</span>
            <span className="scroll-text">UI/UX Expertise</span>
            <span className="star-icon">★</span>
            <span className="scroll-text">HTML5/CSS3 Mastery</span>
            {/* Duplicate content for seamless looping */}
            <span className="scroll-text">Responsive Design</span>
            <span className="star-icon">★</span>
            <span className="scroll-text">UI/UX Expertise</span>
            <span className="star-icon">★</span>
            <span className="scroll-text">HTML5/CSS3 Mastery</span>
          </div>

          {/* Row moving from right to left */}
          <div className="scroll-row scroll-row-right">
            <span className="scroll-text">JavaScript Proficiency</span>
            <span className="star-icon">★</span>
            <span className="scroll-text">Design Tools Mastery</span>
            <span className="star-icon">★</span>
            <span className="scroll-text">Collaborative Teamwork</span>
            {/* Duplicate content for seamless looping */}
            <span className="scroll-text">JavaScript Proficiency</span>
            <span className="star-icon">★</span>
            <span className="scroll-text">Design Tools Mastery</span>
            <span className="star-icon">★</span>
            <span className="scroll-text">Collaborative Teamwork</span>
          </div>

          {/* Another row moving from left to right */}
          <div className="scroll-row scroll-row-left">
            <span className="scroll-text">Problem Solving</span>
            <span className="star-icon">★</span>
            <span className="scroll-text">Keeping Abreast of Trends</span>
            <span className="star-icon">★</span>
            <span className="scroll-text">Agile Methodologies</span>
            {/* Duplicate content for seamless looping */}
            <span className="scroll-text">Problem Solving</span>
            <span className="star-icon">★</span>
            <span className="scroll-text">Keeping Abreast of Trends</span>
            <span className="star-icon">★</span>
            <span className="scroll-text">Agile Methodologies</span>
          </div>
        </div>
      </section>

      <Story />
    </>
  );
};

export default AboutPage;
