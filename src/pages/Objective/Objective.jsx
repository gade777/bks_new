import React from "react";
import "../Objective/objective.css";
import objective from "../../assets/objective.png";

const Objective = () => {
  return (
    <div className="objective_container">
      <div className="objective_left">
        <img src={objective} alt="" className="objective_img"/>
      </div>
      <div className="objective_right">
        <h1 style={{fontSize:'3rem'}}>Objective</h1>
        <h3 style={{fontSize:'1.2rem'}}>
          The Objective and Scope of BKS is covered all concepts with its
          application
        </h3>
        <p style={{marginTop:"1rem",fontSize:'1.1rem'}}>
          The scientific rigor and heritage that was existing in our country
          with following subjects will be true eye opener for young students.
        </p>
        <br />
        <p className="objective_p">
          The principal objective of Bhartiya Knowledge System is to
          investigate; conduct critical studies; highlight the strength of BKS;
          exploit its fullest potential; showcasing its significance for
          sustainable environment, love for nature, holistic ways of living,
          health conscious that ultimately leads to quality life for human
          being.
        </p>
      </div>
    </div>
  );
};

export default Objective;
