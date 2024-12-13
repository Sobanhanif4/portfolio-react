import React, { useState } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'AwamiWeb',
      position: 'Web Developer',
      period: 'May 2023 – 2024',
      tasks: [
        'Set up and maintained interactive web applications using Wordpress, improving user engagement.',
        'Optimized website performance, reducing page load time by 40% through advanced front-end techniques.',
        'Collaborated with cross-functional teams to ensure seamless integration of APIs and backend services.',
      ],
    },
    {
      company: 'Hitnfit',
      position: 'E-commerce Store Designer',
      period: 'June 2024 – Sep 2024',
      tasks: [
        'Designed and deployed user-friendly e-commerce websites using Shopify.',
        'Customized themes and implemented third-party apps to enhance customer experience and functionality.',
        'Conducted UX research and implemented responsive designs, resulting in a 20% increase in sales conversion rates.',
      ],
    },
    
    // {
    //   company: 'Spotify',
    //   position: 'Engineer @ Spotify',
    //   period: 'May 2015 – May 2016',
    //   tasks: [
    //     'Developed and optimized data-driven applications for user analytics.',
    //     'Enhanced music streaming features to improve user experience.',
    //     'Worked with a cross-functional team to deploy new app features.',
    //   ],
    // },
    
  ];

  const [selectedCompany, setSelectedCompany] = useState(experiences[0].company);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  const selectedExperience = experiences.find(
    (exp) => exp.company === selectedCompany
  );

  return (
    <section className="experience-section">
      <h2 className="exp-h2">Experience<span className='experience-span'>.</span></h2>
      <div className="experience-container">
        {/* Sidebar with scroll highlight */}
        <div className="sidebar">
          <div className="scrollbar"></div> {/* Scrollbar */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`sidebar-link ${selectedCompany === exp.company ? 'active' : ''}`}
              onClick={() => handleCompanyClick(exp.company)}
            >
              {exp.company}
            </div>
          ))}
        </div>
        
        {/* Main content area */}
        <div className="experience-details">
          <h3 className='exp-h3'>{selectedExperience.position}</h3>
          <p className='exp-p'>{selectedExperience.period}</p>
          <ul className="exp-ul">
            {selectedExperience.tasks.map((task, idx) => (
              <li key={idx} className="exp-li">{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
