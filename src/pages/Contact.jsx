import "../styles/ContactPage.css";
import { CgMail } from "react-icons/cg";
import { MdCall } from "react-icons/md";
import ContactForm from '../components/ContactForm';
import "../styles/ContactForm.css";


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
            I'll get back to you in the next 48 hours.
          </p>
        </div>
        <div className="contact-image">
          <img src="/mine.png" alt="Profile" />
        </div>

        {/* <div className="contact-email-num">
          <div className="contact-email">

            <CgMail fontSize="30px" />
            <a href="mailto:sobanatban4@gmail.com?subject=Getting%20In%20Touch&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you." className="contact-email-p">sobanatban4@gmail.com</a>
          </div>

          <div className="contact-num">
            <MdCall fontSize="30px" />
            <a href="tel:+923352881869" className=".contact-email-num">+92 3352881869</a>
          </div>
        </div> */}

        <div className="contact-form-div">
          <ContactForm />
        </div>
      </section>


    </>
  );
};

export default Contact;
