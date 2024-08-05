import React, { useState } from "react";
import "../Contact/contact.css";
import Img1 from "../../assets/contact.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaSkype, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_hyf32x8', 'template_kb7068e', formData, 'mpe5RBjde8IlaEFBf')
      .then((response) => {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div id="Contact_main">
      <h1 className="main_heading">Contact Us</h1>
      <h2 className="sub_heading">Testimonial/Feedback</h2>
      <div className="contact_container">
        <div className="contact_left">
          <h3><FaMapMarkerAlt className="contact-icon" /> Location:</h3>
          <p>Sambhajinagar, Maharashtra, Bharat</p>
          <h3><FaEnvelope className="contact-icon" /> Email:</h3>
          <p>contact@bharatknowledgesystem.com</p>
          <h3><FaPhone className="contact-icon" /> Call:</h3>
          <p>+91 92255 21456</p>
          <img src={Img1} alt="contact_img" className="contact_img" />
        </div>
        <div className="contact_right">
          <form onSubmit={handleSubmit}>
            <div className="name-email-container">
              <div>
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" required />
              </div>
              <div>
                <label htmlFor="email">Your Email</label>
                <input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" required />
              </div>
            </div>
            <label htmlFor="subject" className="message">Subject</label>
            <input id="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Enter Your Subject" required />
            <label htmlFor="message" className="message">Message</label>
            <textarea id="message" cols="30" rows="10" value={formData.message} onChange={handleChange} placeholder="Enter Your Message" required></textarea>
            <button type="submit" className="button">Send Message</button>
          </form>
          {status && <p className="form-status">{status}</p>}
        </div>
      </div>
      <div className="newsletter_container">
        <h2 className="newsletter_heading">Join Our Newsletter</h2>
        <p>Kindly enter your email ID to subscribe:</p>
        <div className="newsletter_form">
          <input type="email" placeholder="Enter Your Email" className="newsletter_input" />
          <button className="button newsletter_button">Subscribe</button>
        </div>
      </div>
      <div className="social_networks_container">
        <h2 className="social_heading">Our Social Networks</h2>
        <div className="social_icons">
          <a href="https://www.instagram.com/bharat_knowledge_system/" className="social_icon"><FaInstagram /></a>
          <a href="https://www.facebook.com/profile.php?id=61562084903661&mibextid=ZbWKwL" className="social_icon"><FaFacebook /></a>
          <a href="https://wa.me/9225521456" className="social_icon"><FaWhatsapp /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
