// import React, { useEffect, useRef, useState } from "react";
// import "../../styles/AnimatedExperience.css";

// const StickySlider = () => {
//   const [currentTab, setCurrentTab] = useState(null);
//   const tabRefs = useRef([]);
//   const sliderRef = useRef(null);

//   const tabs = [
//     {
//       id: "tab-es6",
//       label: "ES6",
//       content: (
//         <>
//           <h1>ES6</h1>
//           <h3>New Features in ECMAScript 6</h3>
//           <p>
//             ES6 introduced several new features such as arrow functions,
//             classes, template literals, and more, making JavaScript development
//             more streamlined and powerful.
//           </p>
//         </>
//       ),
//     },
//     {
//       id: "tab-flexbox",
//       label: "Flexbox",
//       content: (
//         <>
//           <h1>Flexbox</h1>
//           <h3>Flexible Box Layout</h3>
//           <p>
//             Flexbox is a layout model in CSS that allows you to design complex
//             layouts easily. It helps to align items dynamically and distribute
//             space within a container.
//           </p>
//         </>
//       ),
//     },
//     {
//       id: "tab-react",
//       label: "React",
//       content: (
//         <>
//           <h1>React</h1>
//           <h3>Building UIs with React</h3>
//           <p>
//             React is a popular JavaScript library for building user interfaces.
//             It allows developers to create large web applications that can
//             update and render efficiently in response to data changes.
//           </p>
//         </>
//       ),
//     },
//     {
//       id: "tab-angular",
//       label: "Angular",
//       content: (
//         <>
//           <h1>Angular</h1>
//           <h3>Powerful Framework for Building Apps</h3>
//           <p>
//             Angular is a platform and framework for building single-page client
//             applications using HTML and TypeScript. It provides a robust set of
//             tools for creating highly interactive and responsive web
//             applications.
//           </p>
//         </>
//       ),
//     },
//     {
//       id: "tab-other",
//       label: "Other",
//       content: (
//         <>
//           <h1>Other</h1>
//           <h3>Exploring Additional Technologies</h3>
//           <p>
//             Beyond the core technologies, there are numerous other tools and
//             frameworks like Vue.js, Svelte, and others that are gaining
//             popularity in the development world.
//           </p>
//         </>
//       ),
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const viewportHeight = window.innerHeight;

//       const closestTab = tabs.reduce((closest, tab) => {
//         const element = document.getElementById(tab.id);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           const elementTop = rect.top + scrollTop;

//           const midpoint = elementTop + rect.height / 1.3;

//           if (
//             midpoint >= scrollTop + viewportHeight / 2 &&
//             midpoint <= scrollTop + viewportHeight
//           ) {
//             return tab.id;
//           }
//         }
//         return closest;
//       }, currentTab);

//       setCurrentTab(closestTab);

//       if (sliderRef.current) {
//         const activeTab = tabRefs.current.find((tab) => tab.id === closestTab);
//         if (activeTab) {
//           sliderRef.current.style.width = `${activeTab.clientWidth}px`;
//           sliderRef.current.style.left = `${activeTab.offsetLeft}px`;
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [tabs, currentTab]);

//   const handleClick = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="sticky-slider__container">
//       <h1 className="sticky-slider__title">
//         Experience
//         <span className="sticky-slider__titleDot">.</span>
//       </h1>
//       <div className="sticky-slider__tabsContainer">
//         {tabs.map((tab) => (
//           <a
//             key={tab.id}
//             href={`#${tab.id}`}
//             className={`sticky-slider__tab ${
//               currentTab === tab.id ? "active" : ""
//             }`}
//             onClick={() => handleClick(tab.id)}
//             ref={(el) => tabRefs.current.push(el)}
//           >
//             {tab.label}
//           </a>
//         ))}
//         <span className="sticky-slider__tabSlider" ref={sliderRef}></span>
//       </div>
//       <main className="sticky-slider__main">
//         {tabs.map((tab) => (
//           <section className="sticky-slider__slide" id={tab.id} key={tab.id}>
//             {tab.content}
//           </section>
//         ))}
//       </main>
//     </div>
//   );
// };

// export default StickySlider;

// import React, { useState, useEffect, useRef } from "react";
// import "../../styles/AnimatedExperience.css";

// const StickySlider = () => {
//   const [isFixed, setIsFixed] = useState(false);
//   const experienceRef = useRef(null);
//   const tabContainerRef = useRef(null);

//   const tabs = [
//     {
//       id: "tab-es6",
//       label: "ES6",
//       content: (
//         <>
//           <h1>ES6</h1>
//           <h3>New Features in ECMAScript 6</h3>
//           <p>
//             ES6 introduced several new features such as arrow functions,
//             classes, template literals, and more, making JavaScript development
//             more streamlined and powerful.
//           </p>
//         </>
//       ),
//     },
//     {
//       id: "tab-flexbox",
//       label: "Flexbox",
//       content: (
//         <>
//           <h1>Flexbox</h1>
//           <h3>Flexible Box Layout</h3>
//           <p>
//             Flexbox is a layout model in CSS that allows you to design complex
//             layouts easily. It helps to align items dynamically and distribute
//             space within a container.
//           </p>
//         </>
//       ),
//     },
//     {
//       id: "tab-react",
//       label: "React",
//       content: (
//         <>
//           <h1>React</h1>
//           <h3>Building UIs with React</h3>
//           <p>
//             React is a popular JavaScript library for building user interfaces.
//             It allows developers to create large web applications that can
//             update and render efficiently in response to data changes.
//           </p>
//         </>
//       ),
//     },
//     {
//       id: "tab-angular",
//       label: "Angular",
//       content: (
//         <>
//           <h1>Angular</h1>
//           <h3>Powerful Framework for Building Apps</h3>
//           <p>
//             Angular is a platform and framework for building single-page client
//             applications using HTML and TypeScript. It provides a robust set of
//             tools for creating highly interactive and responsive web
//             applications.
//           </p>
//         </>
//       ),
//     },
//     {
//       id: "tab-other",
//       label: "Other",
//       content: (
//         <>
//           <h1>Other</h1>
//           <h3>Exploring Additional Technologies</h3>
//           <p>
//             Beyond the core technologies, there are numerous other tools and
//             frameworks like Vue.js, Svelte, and others that are gaining
//             popularity in the development world.
//           </p>
//         </>
//       ),
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       if (experienceRef.current) {
//         const rect = experienceRef.current.getBoundingClientRect();
//         // If the "Experience" section is in the viewport, make the tab container fixed
//         if (rect.top <= 0) {
//           setIsFixed(true);
//         } else {
//           setIsFixed(false);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleClick = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="sticky-slider__container">
//       <h1 className="sticky-slider__title">
//         Experience
//         <span className="sticky-slider__titleDot">.</span>
//       </h1>
//       <div
//         className={`sticky-slider__tabsContainer ${isFixed ? "fixed" : ""}`}
//         ref={tabContainerRef}
//       >
//         {tabs.map((tab) => (
//           <a
//             key={tab.id}
//             href={`#${tab.id}`}
//             className="sticky-slider__tab"
//             onClick={() => handleClick(tab.id)}
//           >
//             {tab.label}
//           </a>
//         ))}
//         <span className="sticky-slider__tabSlider"></span>
//       </div>
//       <main className="sticky-slider__main" ref={experienceRef}>
//         {tabs.map((tab) => (
//           <section key={tab.id} id={tab.id} className="sticky-slider__slide">
//             {tab.content}
//           </section>
//         ))}
//       </main>
//     </div>
//   );
// };

// export default StickySlider;


import React, { useState, useEffect, useRef } from "react";
import "../../styles/AnimatedExperience.css";

const StickySlider = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeTab, setActiveTab] = useState(""); // State to keep track of active tab
  const experienceRef = useRef(null);
  const tabContainerRef = useRef(null);

  const tabs = [
    {
      id: "tab-es6",
      label: "ES6",
      content: (
        <>
          <h1>ES6</h1>
          <h3>New Features in ECMAScript 6</h3>
          <p>
            ES6 introduced several new features such as arrow functions,
            classes, template literals, and more, making JavaScript development
            more streamlined and powerful.
          </p>
        </>
      ),
    },
    {
      id: "tab-flexbox",
      label: "Flexbox",
      content: (
        <>
          <h1>Flexbox</h1>
          <h3>Flexible Box Layout</h3>
          <p>
            Flexbox is a layout model in CSS that allows you to design complex
            layouts easily. It helps to align items dynamically and distribute
            space within a container.
          </p>
        </>
      ),
    },
    {
      id: "tab-react",
      label: "React",
      content: (
        <>
          <h1>React</h1>
          <h3>Building UIs with React</h3>
          <p>
            React is a popular JavaScript library for building user interfaces.
            It allows developers to create large web applications that can
            update and render efficiently in response to data changes.
          </p>
        </>
      ),
    },
    {
      id: "tab-angular",
      label: "Angular",
      content: (
        <>
          <h1>Angular</h1>
          <h3>Powerful Framework for Building Apps</h3>
          <p>
            Angular is a platform and framework for building single-page client
            applications using HTML and TypeScript. It provides a robust set of
            tools for creating highly interactive and responsive web
            applications.
          </p>
        </>
      ),
    },
    // {
    //   id: "tab-other",
    //   label: "Other",
    //   content: (
    //     <>
    //       <h1>Other</h1>
    //       <h3>Exploring Additional Technologies</h3>
    //       <p>
    //         Beyond the core technologies, there are numerous other tools and
    //         frameworks like Vue.js, Svelte, and others that are gaining
    //         popularity in the development world.
    //       </p>
    //     </>
    //   ),
    // },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (experienceRef.current) {
        const rect = experienceRef.current.getBoundingClientRect();
        // If the "Experience" section is in the viewport, make the tab container fixed
        if (rect.top <= 0) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }

      // Calculate the active tab based on scroll position
      const viewportHeight = window.innerHeight;
      let currentTab = "";

      tabs.forEach((tab) => {
        const section = document.getElementById(tab.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is in the viewport
          if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
            currentTab = tab.id;
          }
        }
      });

      setActiveTab(currentTab); // Update the active tab based on scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabs]);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky-slider__container">
      <h1 className="sticky-slider__title">
        Experience
        <span className="sticky-slider__titleDot">.</span>
      </h1>
      <div
        className={`sticky-slider__tabsContainer ${isFixed ? "fixed" : ""}`}
        ref={tabContainerRef}
      >
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className={`sticky-slider__tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => handleClick(tab.id)}
          >
            {tab.label}
          </a>
        ))}
        <span className="sticky-slider__tabSlider"></span>
      </div>
      <main className="sticky-slider__main" ref={experienceRef}>
        {tabs.map((tab) => (
          <section key={tab.id} id={tab.id} className="sticky-slider__slide">
            {tab.content}
          </section>
        ))}
      </main>
    </div>
  );
};

export default StickySlider;



