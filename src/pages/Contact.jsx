import "../styles/ContactPage.css";
import { CgMail } from "react-icons/cg";
import { MdCall } from "react-icons/md";

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
            I'll get back to you in the next 48 hours.{" "}
          </p>
        </div>
        <div className="contact-image">
          <img src="/mine.png" alt="Profile" />
        </div>
      </section>
      <div className="contact-email-num">
        <div className="contact-email">
          <CgMail  fontSize="30px"  />
          <p className="contact-email-p">sobanatban4@gmail.com</p>
        </div>
        <div className="contact-num">
          <MdCall fontSize="30px"/>

          <p className=".contact-email-num">+92 3352881869</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
