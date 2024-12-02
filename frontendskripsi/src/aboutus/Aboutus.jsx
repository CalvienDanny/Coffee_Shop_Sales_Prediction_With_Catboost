import React, { useState } from "react";
import "./Aboutus.css";

const AboutUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); // Menampilkan notifikasi setelah form diisi
    setTimeout(() => setFormSubmitted(false), 3000); // Menghilangkan notifikasi setelah 3 detik
  };

  return (
    <div className="aboutus">
      {/* Information Section */}
      <section className="info-section">
        <h2 className="info-title">Who We Are</h2>
        <div className="info-container">
          <div className="info-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1628/1628441.png" alt="Our Mission" />
            <h3>Our Mission</h3>
            <p>To deliver accurate predictive insights for coffee shops, enhancing decision-making and boosting SME growth. By utilizing machine learning, the app aims to understand customer preferences, improve efficiency, and increase local revenue through effective sales strategies.</p>
          </div>
          <div className="info-card">
            <img src="https://cdn-icons-png.flaticon.com/512/5481/5481993.png" alt="Our Vision" />
            <h3>Our Vision</h3>
            <p>To become a leading application in helping coffee shop owners boost sales and enhance customer satisfaction through data-driven purchase predictions.</p>
          </div>
          <div className="info-card">
            <img src="https://cdn-icons-png.flaticon.com/512/46/46854.png" alt="Call Us" />
            <h3>Call Us</h3>
            <p>Feel free to contact us at Whatsapp number +62 851-5691-3813 (Calvien) or via email calviendannynariyana@gmail.com.</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-text">
            <h2>Have Questions? Reach Out!</h2>
            <p>Our team is here to help. Fill out the form and we’ll get back to you promptly.</p>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Your Phone" />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
            {formSubmitted && (
              <div className="notification">
                Your message already sent!
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
