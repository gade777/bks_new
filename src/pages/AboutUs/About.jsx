import React from "react";
import "../AboutUs/about.css";
import bks from "../../assets/bks.png";

const About = () => {
  return (
    <div className="about_container">
      <div className="about_left">
        <img src={bks} alt="" />
      </div>
      <div className="about_right">
        <h1>About Us</h1>
        <p>
          BKS E-learning is a large education and online learning platform which
          teach ANCIENT BHARTIYA knowledge heritage to the budding young
          students mentioning consitancy and scientific value, that ours is only
          continuing, surviving ancient civilization with huge repository of
          knowledge. We will teach students that this is the only source created
          by the forefathers which can provide great framework, analyze and
          received wisdom in a contemporary context. It benefits students by
          teaching them various ways to approach new ideas and concepts with
          their Academic Curriculum.
        </p>
        <button className="about_button">Features</button>
      </div>
    </div>
  );
};

export default About;
