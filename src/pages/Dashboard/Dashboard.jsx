import React, { useState, useEffect } from "react";
import "../Dashboard/Dashboard.css";
import image1 from "../../assets/dashboard-bg1.jpeg";
import image2 from "../../assets/dashboard-bg2.jpeg";
import image3 from "../../assets/dashboard-bg3.jpeg";
import About from "../AboutUs/About";
import Vision from "../Vision/Vision";
import Scope from "../Scope/Scope";
import Objective from "../Objective/Objective";
import Other from "../Other/Other";
import Testimonial from "../Testimonials/Testimonial";
import Subjects from "../Subjects/Subjects";
import Contact from "../Contact/Contact";

const Dashboard = () => {
  // Array of image URLs
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to update the index of the current image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds (5000 milliseconds)
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="dashboard_container">
    {/* <Navbar /> */}
    <div className="dashboard_content">
      <div
        className="hero_section"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          transition: "background-image 0.5s ease-in-out", // Add transition effect
        }}
      >
        <div className="hero_content">
          <h1 className="large_text1">Bettter digital experience with</h1>
          <h1 className="large_text">BKS</h1>
          <h3 className="small_text">BHARAT KNOWLEDGE SYSTEM</h3>
        </div>
      </div>
      <About />
      <Vision/>
      <Scope/>
      <Objective/>
      <Other/>
      {/* <Testimonial/> */}
      <Subjects/>
      <Contact/>
    </div>
  </div>
  );
};

export default Dashboard;
