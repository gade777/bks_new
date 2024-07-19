import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../AboutUs/about.css";
// import bks from "../../assets/bks_log.png";
// import Modal from "../../components/Model/Model";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const aboutRightRef = useRef(null);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    gsap.fromTo(
      aboutRightRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRightRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="about_container">
      <div className="about_left">
        {/* <img src={bks} alt="bks" /> */}
      </div>
      <div className="about_right" ref={aboutRightRef}>
        <h1 style={{ textAlign: 'center' }}>About Us</h1>
        <b>BKS</b>E-learning is a large education and online learning platform which teaches ANCIENT BHARTIYA knowledge heritage to the budding young students mentioning consistency and scientific value, that ours is only continuing, surviving ancient civilization with a huge repository of knowledge. We will teach students that this is the only source created by the forefathers which can provide a great framework, analyze and received wisdom in a contemporary context. It benefits students by teaching them various ways to approach new ideas and concepts with their <b>Academic Curriculum.</b>
        <ul>
          <li>NEP 2020 Compliant: IKS is mandatory in future education.</li>
          <li>UGC Mandate: 5% Credits from IKS for every UG & PG Course.</li>
          <li>Dual Qualification: Enhance your current education with an IKS diploma.</li>
          <li>IKS will be the foundation of VIKASIT BHARAT 2047.</li>
        </ul>
        <button className="about_button" onClick={handleModalOpen}>
          Features
        </button>
      </div>

      {/* <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className="modal-body">
          <h2>Why Choose IKS?</h2>
          <ul>
            <li>Detail Coverage of BKS ( Bharat Knowledge System) topics</li>
            <li>Right approach to balancing the concepts with applications</li>
            <li>BKS Scope has covered as per NEP ( New Education Policy)</li>
            <li>Science and Logic explained by Sutras and Shastras of IKS</li>
            <li>Excellent introduction to breadth & depth of Indian Tradition, art and culture.</li>
            <li>Covered foundational knowledge of Science, Engineering and Technology, Humanities and Social awareness</li>
            <li>Structured Classification</li>
          </ul>
        </div>
      </Modal> */}
    </div>
  );
};

export default About;
