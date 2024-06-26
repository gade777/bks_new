import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faScroll, 
  faChalkboard, 
  faAtom, 
  faFlask, 
  faMicroscope, 
  faBalanceScale, 
  faLanguage,
  faRadiation,
} from '@fortawesome/free-solid-svg-icons';
import "../Scope/scope.css";

const Scope = () => {
  // Dummy data array
  const data = [
    {
      icon: faScroll,
      text: "Sulbha Sutras (centuries prior) – Comparing with Geometry later discovery in Greece",
    },
    {
      icon: faChalkboard,
      text: "Paninis Grammar describe Sanskrit language in 4000 algebraic rules with structure that is now compared to a computer program.",
    },
    {
      icon: faAtom,
      text: "Nyaya Shastra equivalent to mathematical logic – now foundation for analysis by modern machines.",
    },
    {
      icon: faFlask,
      text: "Kerala school of Mathematics discovered the calculus over two centuries prior to the calculus discovered by Newton",
    },
    {
      icon: faMicroscope,
      text: "Ancient Ayurveda uses tripartite analysis ( three doshas) since modern logic shows the ternary logic is more powerful than binary logic",
    },
    {
      icon: faBalanceScale,
      text: "Mendeleev was inspired by 2D structure of Sanskrit alphabet to propose similar 2D structure of chemical elements",
    },
    { 
      icon: faLanguage, 
      text: "Upanishads given much importance to discover more in quantum physics" 
    },
    { 
      icon: faRadiation, 
      text: "Vedantic vision – radio science" 
    },
    // Add more data as needed
  ];

  return (
    <div className="scope_container">
      <div>
        <h1 style={{textAlign:'center'}} className="scope_h1">Scope</h1>
        <p className="scope_p">
          BHARAT’s sciences are based on fundamental principles, axioms, logical
          inference and empirical observations are generally written down in
          texts called Shastra and Sutra, for eg
        </p>
      </div>
      <div className="rectangle">
        {data.map((item, index) => (
          <div className="box" key={index}>
            <FontAwesomeIcon icon={item.icon} className="icon" style={{ fontSize: "2em", color: "orange" }} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scope;
