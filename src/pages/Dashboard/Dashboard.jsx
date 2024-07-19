import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
// import Typical from "react-typical";
import "../Dashboard/Dashboard.css";
import image1 from "../../assets/dashboard-bg1.jpeg";
import image2 from "../../assets/dashboard-bg2.jpeg";
import About from "../AboutUs/About";
import Vision from "../Vision/Vision";
import Scope from "../Scope/Scope";
import Objective from "../Objective/Objective";
import Subjects from "../Subjects/Subjects";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Footer from "../footer/Footer";
// import Profile from "../Instructor/Profile";

const Dashboard = () => {
  const images = [image1, image2];
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

  // const languages = [
  //   "भारत ज्ञान प्रणाली",
  //   "BHARAT KNOWLEDGE SYSTEM",
  //   "نظام علم بھارت"
  // ];

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
          {/* <div className="hero_content">
            <h1 className="large_text1">Better digital experience with</h1>
            <h1 className="large_text">
              <Typical
                steps={languages.map((lang) => [lang, 3000]).flat()}
                loop={Infinity}
                wrapper="span"
              />
            </h1>
            <h3 className="small_text">BHARAT KNOWLEDGE SYSTEM</h3>
          </div> */}
        </div>
        <About />
        <Vision />
        <Scope />
        {/* <Profile/> */}
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
