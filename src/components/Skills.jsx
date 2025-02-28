import '../styles/Skills.css';

const Skills = () => {
  const skills = {
    // webDesign: ['UI/UX Design', 'Responsive Design', 'Wireframing', 'User Research'],
    frontend: ['JavaScript', 'ReactJS', 'Bootstrap', 'Chakra UI', 'WordPress', 'Bootstrap'],
    backend: ['Node.js', 'MongoDB', 'Express.js', 'Firebase'],
    ecommerce: ['Shopify', 'WooCommerce'],
    softSkills: ['Effective communication', 'Collaboration', 'Commitment', 'Leadership'],
  };

  return (
    <section className="skills-section">
      <h2>Skills<span className='skills-span'>.</span></h2>
      <div className="skills-grid">
        {/* <div className="skills-category">
          <h3>Web Design</h3>
          <ul>
            {skills.webDesign.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div> */}
        <div className="skills-category">
          <h3>Frontend</h3>
          <ul>
            {skills.frontend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills-category">
          <h3>Backend</h3>
          <ul>
            {skills.backend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills-category">
          <h3>E-commerce Platforms</h3>
          <ul>
            {skills.ecommerce.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills-category">
          <h3>Soft Skills</h3>
          <ul>
            {skills.softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
       
      </div>
    </section>
  );
};

export default Skills;
