import '../styles/CtaButton.css';

const CtaButton = () => {
  return (
    <div className="hero-buttons">
      <a href="mailto:sobanatban4@gmail.com?subject=Getting%20In%20Touch&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you." target="_blank" rel="noopener noreferrer">
        <button className="btn btn-primary">Get In Touch</button>
      </a>

      
        <a href="https://github.com/Sobanhanif4" target="_blank" rel="noopener noreferrer">
        <button className="btn btn-secondary">Browse Projects</button>
      </a>
    </div>
  );
};

export default CtaButton;
