import "../styles/ContactPage.css"; // Import CSS styles

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2></h2>
        <h1>Get In Touch<span className='contact-span'>.</span></h1>
        <p>
        Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.        </p>
      </div>
      <div className="contact-image">
        <img src="/mine.png" alt="Profile" />
      </div>
    </section>
  )
}

export default Contact
