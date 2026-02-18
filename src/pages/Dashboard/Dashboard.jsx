import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../Dashboard/Dashboard.css";
// import image1 from "../../assets/dashboard_1.png";
import image2 from "../../assets/dashboard_2.png";
// import image3 from "../../assets/dashboard-bg1.jpeg";
// import image4 from "../../assets/dashboard-bg3.jpeg";
import image5 from "../../assets/img.png";
import image6 from "../../assets/img1.png";
import image7 from "../../assets/img2.png";
import About from "../AboutUs/About";
import Vision from "../Vision/Vision";
import Scope from "../Scope/Scope";
import Objective from "../Objective/Objective";
import Subjects from "../Subjects/Subjects";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Footer from "../footer/Footer";

const Dashboard = () => {
  const images = [image2, image5, image6, image7];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slidingImagesRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const slidingImages = slidingImagesRef.current;
    if (slidingImages) {
      gsap.fromTo(
        slidingImages,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1 }
      );
    }
  }, [currentImageIndex]);

  return (
    <div className="dashboard_container">
      <div className="dashboard_content">
        <div className="hero_section">
          <div className="background_image" />
          <div className="hero_content">
            <h1 className="line2">
              <span className="bks_text">BKS-LAB</span>
            </h1>
            <h1 className="line3">BHARAT KNOWLEDGE SYSTEM</h1>
            <h1 className="line1">Learning About Bharatvarsh</h1>
            <button
              className="summer_camp_btn"
              onClick={() => {
                // Stay on same page - no navigation
                console.log("Summer Camp Registration clicked");
              }}
            >
              <span className="btn_text">Summer Camp Registration</span>
              <div className="btn_glow"></div>
            </button>
          </div>
          <div
            className="sliding_images"
            ref={slidingImagesRef}
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              transition: "background-image 0.5s ease-in-out",
            }}
          />
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
