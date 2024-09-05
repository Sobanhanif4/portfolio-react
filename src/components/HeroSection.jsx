import React from 'react';
import '../styles/HeroSection.css';
import CtaButton from './CtaButton';


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Hey, I'm Soban 👋</h2>
        <h1> <span className='frontend'>Front</span>end Developer</h1>
        <p>
          I'm a frontend developer based in Italy, I'll help you build beautiful websites your users will love.
        </p>
       <CtaButton />
      </div>
      <div className="hero-image">
        <img src="/mine.png" alt="Profile" />
      </div>
    </section>
  );
};

export default HeroSection;
