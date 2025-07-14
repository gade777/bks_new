import React from 'react';
import './us.css'; // Ensure this path is correct
import img1 from "../../assets/bks.jpeg";
import img2 from "../../assets/vedic.jpeg";
import img3 from "../../assets/purany.jpeg";
import img4 from "../../assets/course.jpeg";
import img5 from "../../assets/upanishads.png"


// Plan Component
const Plan = ({ imageSrc, name, details, fees }) => (
  <div className="plan">
    <img src={imageSrc} alt={name} className="plan-image" />
    <h2 className="plan-name">{name}</h2>
    <div className="plan-description">
      <h3 className="description-heading">Course Details</h3>
      <ul className="description-list">
        {details.map((detail, index) => (
          <li key={index}>
            <span className="icon">▶</span> {detail}
          </li>
        ))}
      </ul>
      <p className="course-fees">Course Fees: {fees}</p>
      <p className="course-duration">Duration: 2 days</p>
      <p className="course-language">Language: Hinglish (Hindi + English)</p>
      <p className="certificate">Certificate to all Participants</p>
    </div>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeiLLaOcOVodbHkI2k-3kRfvXFMH3jevmJIfZOkxyqECRvJ0Q/viewform" className="choose-plan-btn" target="_blank" rel="noopener noreferrer">
      Register
    </a>
  </div>
);

const India = () => {
  // Plan details
  const plans = [
    {
      name: "Science in Puranas",
      imageSrc: img3, // Use imported image
      details: [
        "Mahapuranas",
        "Upapuranas",
        "History of Creation of Cosmos",
        "History of Time Scales",
        "History of creation of life",
        "History of Dynamics",
        "History of evolution of Life",
        "Course Code: SIP-01"
      ],
      fees: "$10/- Only"
    },
    {
      name: "Introduction to BKS",
      imageSrc: img1, // Use imported image
      details: [
        "What is IKS? Indology, BKS History, Basic knowledge of Indian culture and tradition",
        "Indian Architecture",
        "Ancient Indian Universities",
        "Importance of BKS",
        "14 Vidya & 64 Kala",
        "Introduction to Ved",
        "Mathematics & Science",
        "Course Code: BKS-01"
      ],
      fees: "$20/- Only"
    },
    {
      name: "Physics in Vedas",
      imageSrc: img2, // Use imported image
      details: [
        "Energy",
        "Light",
        "Velocity of light",
        "Law of gravitation",
        "Solar energy",
        "Electricity",
        "Motion and many more concepts explained as per Veda",
        "Atmosphere",
        "Course Code: PIV-01"
      ],
      fees: "$30/- Only"
    },
    {
      name: "Origin and Principles of Upanishad",
      imageSrc: img5, // Use imported image
      details: [
        "Origin and Introduction of Upanishad",
        "Theory",
        "Principles",
        "Four Mahavakyas",
        "Introduction 14 main Upanishad",
        "Essence of Upanishad",
        "Course Code: OPU-01"
      ],
      fees: "$30/- Only"
    }
  ];

  return (
    <div className="subscription-plans">
      {/* Top Image and Text */}
      <div className="top-section">
        <img src={img4} alt="Subscription Plans" className="top-image" />
        <p className="top-text">
          You can register for any course, and the dates will be communicated on your WhatsApp number.
        </p>
      </div>

      {/* Plans Section */}
      <div className="plans">
        {plans.map((plan, index) => (
          <Plan 
            key={index}
            imageSrc={plan.imageSrc}
            name={plan.name}
            details={plan.details}
            fees={plan.fees}
          />
        ))}
      </div>
    </div>
  );
};

export default India;
