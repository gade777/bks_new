import React from "react";
import "../Contact/contact.css";
import Img1 from "../../assets/contact.jpg";

const Contact = () => {
 return (
    <div id="Contact_main">
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      <h2 style={{ textAlign: "center" }}>Testimonial/Feedback</h2>
      <div className="contact_container">
        <div className="contact_left">
          <h3>Location:</h3>
          <p>Sambhajinagar,Maharashtra,Bharat</p>
          <h3>Email:</h3>
          <p>contact@bharatknowledgesystem.com</p>
          <h3>Call:</h3>
          <p>+91 92255 21456</p>
          <img
            src={Img1}
            alt="contact_img"
            style={{ objectFit: "cover", width: "30vw" }}
          />
        </div>
        <div className="contact_right">
          <div className="name-email-container">
            <div>
              <label htmlFor="">Your Name</label>
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div>
              <label htmlFor="">Your Email</label>
              <input type="email" name="" id="" placeholder="Enter Your Email" />
            </div>
          </div>
          <label htmlFor="" className="message">Subject</label>
          <input type="text" placeholder="Enter Your Subject" />
          <label htmlFor="" className="message">Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button className="button">Send Message</button>
        </div>
      </div>
    </div>
 );
};

export default Contact;

