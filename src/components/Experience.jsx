import React, { useState } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Apple',
      position: 'Engineer @ Apple',
      period: 'May 2018 – Present',
      tasks: [
        'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
        'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
        'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps',
      ],
    },
    {
      company: 'Microsoft',
      position: 'Engineer @ Microsoft',
      period: 'June 2016 – April 2018',
      tasks: [
        'Led a team in developing cloud computing solutions.',
        'Improved data management systems, increasing efficiency by 25%.',
        'Collaborated on cross-functional teams to drive innovation.',
      ],
    },
    {
      company: 'Spotify',
      position: 'Engineer @ Spotify',
      period: 'May 2015 – May 2016',
      tasks: [
        'Developed and optimized data-driven applications for user analytics.',
        'Enhanced music streaming features to improve user experience.',
        'Worked with a cross-functional team to deploy new app features.',
      ],
    },
    // Add more experiences as needed
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
      <h2>Experience<span className='experience-span'>.</span></h2>
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
          <h3>{selectedExperience.position}</h3>
          <p>{selectedExperience.period}</p>
          <ul>
            {selectedExperience.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
