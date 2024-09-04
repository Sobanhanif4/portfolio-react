import React, { useEffect, useRef, useState } from 'react';
import "../../styles/AnimatedExperience.css"; // Import regular CSS

const StickySlider = () => {
  const [currentTab, setCurrentTab] = useState('tab-es6'); // Set the default active tab here
  const [tabPositions, setTabPositions] = useState({});
  const tabRefs = useRef([]);
  const sliderRef = useRef(null);

  const tabs = [
    { id: 'tab-es6', label: 'ES6' },
    { id: 'tab-flexbox', label: 'Flexbox' },
    { id: 'tab-react', label: 'React' },
    { id: 'tab-angular', label: 'Angular' },
    { id: 'tab-other', label: 'Other' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const tabPositions = {};

      tabs.forEach(tab => {
        const element = document.getElementById(tab.id);
        if (element) {
          tabPositions[tab.id] = element.offsetTop;
        }
      });

      setTabPositions(tabPositions);

      const closestTab = Object.keys(tabPositions).reduce((closest, key) => {
        return Math.abs(tabPositions[key] - scrollTop) < Math.abs(tabPositions[closest] - scrollTop)
          ? key
          : closest;
      }, Object.keys(tabPositions)[0]);

      setCurrentTab(closestTab);

      if (sliderRef.current) {
        const activeTab = tabRefs.current.find(tab => tab.id === closestTab);
        if (activeTab) {
          sliderRef.current.style.width = `${activeTab.clientWidth}px`;
          sliderRef.current.style.left = `${activeTab.offsetLeft}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tabs]);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky-slider__container">
      <h1 className="sticky-slider__title">
        Sticky Slider Navigation<span className="sticky-slider__titleDot">.</span>
      </h1>
      <div className="sticky-slider__tabsContainer">
        {tabs.map(tab => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className={`sticky-slider__tab ${currentTab === tab.id ? 'active' : ''}`}
            onClick={() => handleClick(tab.id)}
            ref={el => tabRefs.current.push(el)}
          >
            {tab.label}
          </a>
        ))}
        <span className="sticky-slider__tabSlider" ref={sliderRef}></span>
      </div>
      <main className="sticky-slider__main">
        {tabs.map(tab => (
          <section className="sticky-slider__slide" id={tab.id} key={tab.id}>
            <h1>{tab.label}</h1>
            <h3>Something about {tab.label.toLowerCase()}</h3>
          </section>
        ))}
      </main>
    </div>
  );
};

export default StickySlider;
