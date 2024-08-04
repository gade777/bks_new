import React, { useEffect } from "react";
import "./instructor.css";
import mam from "../../assets/megha-ma'am-2.jpeg";
import { gsap } from "gsap";

const Instructor = () => {
  useEffect(() => {
    gsap.fromTo(
      ".profile-image img",
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".profile-text",
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  return (
    <div className="parent-container">
      <div className="instructor-profile">
        <div className="profile-header">
          <h1>Coach Profile</h1>
        </div>
        <div className="profile-container">
          <div className="profile-image">
            <img src={mam} alt="Megha Thete" style={{objectFit:'contain'}}/>
          </div>
          <div className="profile-text">
            <h2 style={{color:'#eb5d1e'}}>Coach - Megha Thete</h2>
            <p>
              The Instructor is a management professional (MBA HR) and has worked
              with corporates in many MNCs. She is a Student of Masters in Indian
              Knowledge System (MIKS) from Bhishma College of Indic Studies and
              Infinity Foundation USA and a mother of two daughters. Being an
              entrepreneur and having experience in running a social NGO for Women
              Empowerment, she also has profound understanding of ancient
              traditions and philosophies and she has inspired a deeper connection
              to our cultural roots. She has deeper insights into the timeless
              wisdom of Vedas, Upanishads, and other sacred texts in BKS. Coach's
              commitment reflects the holistic approach inherent in the Bharat
              knowledge system (BKS).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
