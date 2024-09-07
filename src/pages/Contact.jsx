import "../styles/ContactPage.css";
import { CgMail } from "react-icons/cg";
import { MdCall } from "react-icons/md";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3fkoklg", // Replace with your service ID
      "template_raib3lj", // Replace with your template ID
      e.target,
      "RpaGgBG_YuBI5XoPW" // Replace with your user ID
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      alert('Your message has been sent successfully!');
    }, (error) => {
      console.log('Failed to send email. Error:', error.text);
      alert('Failed to send your message. Please try again.');
    });

    e.target.reset();
  };

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
      </section>

      <div className="contact-email-num">
        <div className="contact-email">
          <CgMail fontSize="30px" />
          <p className="contact-email-p">sobanatban4@gmail.com</p>
        </div>
        <div className="contact-num">
          <MdCall fontSize="30px" />
          <p className=".contact-email-num">+92 3352881869</p>
        </div>
      </div>

      <form onSubmit={sendEmail} className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="query">Your Query:</label>
          <textarea
            name="query"
            value={formData.query}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Contact;
