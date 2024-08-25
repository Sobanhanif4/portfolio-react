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
        'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'
      ]
    },
    // Add more experiences as needed
  ];

  return (
    <section className="experience-section">
      <h2>Experience<span className='experience-span'>.</span></h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.company}</h3>
            <h4>{exp.position}</h4>
            <p>{exp.period}</p>
            <ul>
              {exp.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
