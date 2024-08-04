import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../Dashboard/Dashboard.css";
import image1 from "../../assets/dashboard_1.png";
import image2 from "../../assets/dashboard_2.png";
import image3 from "../../assets/dashboard-bg1.jpeg";
import image4 from "../../assets/dashboard-bg3.jpeg";
import About from "../AboutUs/About";
import Vision from "../Vision/Vision";
import Scope from "../Scope/Scope";
import Objective from "../Objective/Objective";
import Subjects from "../Subjects/Subjects";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Footer from "../footer/Footer";

const Dashboard = () => {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const heroSection = heroSectionRef.current;
    gsap.fromTo(
      heroSection,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }, [currentImageIndex]);

  return (
    <div className="dashboard_container">
      <div className="dashboard_content">
        <div
          className="hero_section"
          ref={heroSectionRef}
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            transition: "background-image 0.5s ease-in-out",
          }}
        >
          <div className="hero_content">
            <h1 className="line1">Better digital experience with</h1>
            <h1 className="line2">
              <span className="bks_text">BKS</span>
            </h1>
            <h1 className="line3">BHARAT KNOWLEDGE SYSTEM</h1>
          </div>
        </div>
        <About />
        <Vision />
        <Scope />
        <Objective />
        <Subjects />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
