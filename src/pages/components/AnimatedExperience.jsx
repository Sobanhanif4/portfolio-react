import React, { useEffect, useState, useRef } from "react";
import "../../styles/AnimatedExperience.css"; // Import local CSS styles

const AnimatedExperience = () => {
  const scrollRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollRef.current.scrollTop;
      const scrollHeight = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;

      const scrollPercent = (scrollTop / scrollHeight) * 100;

      setScrollTop(scrollTop);
      setScrollHeight(scrollPercent);
    };

    const scrollSection = scrollRef.current;
    scrollSection.addEventListener("scroll", handleScroll);

    return () => scrollSection.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="animated-experience__container">
      <h1 className="animated-experience__title">
        My Experience<span className="animated-experience__title-dot">.</span>
      </h1>
      <div className="animated-experience__scroll-section" ref={scrollRef}>
        <div className="animated-experience__scroll-indicator">
          <div
            className="animated-experience__indicator-line"
            style={{
              height: `${scrollHeight}%`,
              top: `${scrollTop}px`,
              transition: `top ${scrollHeight > 0 ? '0.4s' : '0s'} ease-out`, // Smoother transition
            }}
          ></div>
        </div>
        {/* Experience Items */}
        {[
          { number: "01", role: "Software Developer", company: "Webflow" },
          { number: "02", role: "Frontend Developer", company: "Stripe" },
          { number: "03", role: "UI Engineer", company: "Spotify" },
          { number: "04", role: "Backend Developer", company: "Amazon" },
          { number: "05", role: "Full Stack Developer", company: "Google" },
          { number: "06", role: "DevOps Engineer", company: "Microsoft" },
        ].map((experience, index) => (
          <div className="animated-experience__item" key={index}>
            <div className={`animated-experience__number ${Math.floor(scrollTop / 100) === index ? 'active' : ''}`}>
              {experience.number}
            </div>
            <div className="animated-experience__details">
              <h2 className="animated-experience__role">{experience.role}</h2>
              <h3 className="animated-experience__company">{experience.company}</h3>
              <p className="animated-experience__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam
                nisl sit amet lacus volutpat, vitae commodo odio tincidunt.
                Suspendisse libero purus, tincidunt in massa vel, eleifend aliquet mi.
                Sed erat lorem, posuere quis dolor ullamcorper, posuere bibendum arcu.
                Donec lacinia rutrum nibh faucibus malesuada. Quisque non aliquam nibh,
                quis laoreet magna. Morbi blandit ex sed lorem blandit interdum.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedExperience;
