// FILE: components/ContactForm.jsx
import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  // Log the environment variable to ensure it's correctly loaded
  console.log("Formspree URL: ", import.meta.env.VITE_REACT_APP_FORMSPREE_URL);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // Submit form
      e.target.submit();
    } else {
      setErrors(formErrors);
    }
  };

  

return (
    <form id="contact-form" action={import.meta.env.VITE_REACT_APP_FORMSPREE_URL} method="POST" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        {errors.name && <span className="error">{errors.name}</span>}
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        {errors.email && <span className="error">{errors.email}</span>}
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
        
        <button type="submit">Send</button>
    </form>
);
};

export default ContactForm;