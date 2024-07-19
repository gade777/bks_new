import React from "react";
import "../Contact/contact.css";
import Img1 from "../../assets/contact.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaSkype, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
 return (
    <div id="Contact_main">
      <h1 className="main_heading">Contact Us</h1>
      <h2 className="sub_heading">Testimonial/Feedback</h2>
      <div className="contact_container">
        <div className="contact_left">
          <h3>Location:</h3>
          <p>Sambhajinagar, Maharashtra, Bharat</p>
          <h3>Email:</h3>
          <p>contact@bharatknowledgesystem.com</p>
          <h3>Call:</h3>
          <p>+91 92255 21456</p>
          <img
            src={Img1}
            alt="contact_img"
            className="contact_img"
          />
        </div>
        <div className="contact_right">
          <div className="name-email-container">
            <div>
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" placeholder="Enter Your Name" />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <input id="email" type="email" placeholder="Enter Your Email" />
            </div>
          </div>
          <label htmlFor="subject" className="message">Subject</label>
          <input id="subject" type="text" placeholder="Enter Your Subject" />
          <label htmlFor="message" className="message">Message</label>
          <textarea id="message" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
          <button className="button">Send Message</button>
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
          <a href="#" className="social_icon"><FaFacebook /></a>
          <a href="#" className="social_icon"><FaTwitter /></a>
          <a href="#" className="social_icon"><FaInstagram /></a>
          <a href="#" className="social_icon"><FaLinkedin /></a>
          <a href="#" className="social_icon"><FaSkype /></a>
          <a href="#" className="social_icon"><FaWhatsapp /></a>
        </div>
      </div>
    </div>
 );
};

export default Contact;