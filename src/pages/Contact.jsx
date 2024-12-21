import "../styles/ContactPage.css";
import ContactForm from '../components/ContactForm';
import "../styles/ContactForm.css";
import Footer from "../components/Footer";

const Contact = () => {

  return (
    <>
      <section className="contact-section">
        <div className="contact-content">
          <h2></h2>
          <h1>
            Get In Touch<span className="contact-span">.</span>
          </h1>
          <p>
            Looking to partner or work together? Reach out through the form and
            I'll get back to you instantly.
          </p>
        </div>
        <div className="contact-image">
          <img src="/mine.png" alt="Profile" />
        </div>

        <div className="contact-form-div">
          <ContactForm />
        </div>
      </section>
      <Footer />

    </>
  );
};

export default Contact;
