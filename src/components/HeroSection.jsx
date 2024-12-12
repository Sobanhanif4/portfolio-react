import React, { useState, useEffect } from 'react'; import "../styles/HeroSection.css";
import CtaButton from "./CtaButton";

const HeroSection = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Set up event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Hey, I'm Soban 👋</h2>
        <h1>
          <span className="frontend">Web</span> Developer
        </h1>
        <p>
        I’m a web developer based in Pakistan, dedicated to helping
         you create beautiful, user-friendly websites that your audience will love.
        </p>
        <div className="cta-button-container">
          {windowWidth > 768 ? (
            <div> {/* Render something specific for mobile */}
              <CtaButton />
            </div>
          ) : (
            <div> {/* Render something for desktop */}

            </div>
          )}
        </div>
      </div>
      <div className="hero-image">
        <img src="public/soban_img.png" alt="Profile" />
      </div>

      <div className='cta-mobile'>
        {windowWidth < 768 ? (
          <div> {/* Render something specific for mobile */}
            <CtaButton />
          </div>
        ) : (
          " "
        )}
      </div>
    </section>
  );
};

export default HeroSection;
