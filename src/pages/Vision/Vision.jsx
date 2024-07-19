import React from "react";
import "../Vision/vision.css";
import vision from "../../assets/vision.png";

const Vision = () => {
  return (
    <div className="vision_container">
      <div className="vision_left">
        <img src={vision} alt="" />
      </div>
      <div className="vision_right">
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
