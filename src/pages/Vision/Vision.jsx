import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Vision/vision.css";
import vision from "../../assets/vision.png";

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  const visionContainerRef = useRef(null);

  useEffect(() => {
    const visionSections = visionContainerRef.current.querySelectorAll(".vision_section");

    visionSections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="vision_container" ref={visionContainerRef}>
      <div className="vision_left vision_section">
        <img src={vision} alt="Vision" />
      </div>
      <div className="vision_right vision_section">
        <div>
          <h1>Vision</h1>
          <p>
            Create a place of research of BKS (Bhartiya Knowledge System) to
            make it reachable through technology and applications.
          </p>
        </div>
        <div>
          <h1>Mission</h1>
          <p>
            Visioning and Execution of Bharatiya Knowledge system, providing
            thought leadership initiatives by involving in-depth research for
            epistemology of Bharat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
