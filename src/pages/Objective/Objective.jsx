import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Objective/objective.css";
import objective from "../../assets/objective.png";

gsap.registerPlugin(ScrollTrigger);

const Objective = () => {
  const objectiveLeftRef = useRef(null);
  const objectiveRightRef = useRef(null);

  useEffect(() => {
    const elementsToAnimate = [
      objectiveLeftRef.current,
      objectiveRightRef.current,
      ...objectiveRightRef.current.querySelectorAll("h1, h3, p"),
    ];

    elementsToAnimate.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="objective_container">
      <div className="objective_left" ref={objectiveLeftRef}>
        <img src={objective} alt="" className="objective_img"/>
      </div>
      <div className="objective_right" ref={objectiveRightRef}>
        <h1 style={{fontSize: '3rem'}}>Objective</h1>
        <h3 style={{fontSize: '1.2rem'}}>
          The Objective and Scope of BKS is covered all concepts with its
          application
        </h3>
        <p style={{marginTop: "1rem", fontSize: '1.1rem'}}>
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
