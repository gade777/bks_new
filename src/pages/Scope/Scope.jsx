import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

const Scope = () => {
  const scopeContainerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const data = [
    { icon: faScroll, text: "Sulbha Sutras (centuries prior) – Comparing with Geometry later discovery in Greece" },
    { icon: faChalkboard, text: "Paninis Grammar describe Sanskrit language in 4000 algebraic rules with structure that is now compared to a computer program." },
    { icon: faAtom, text: "Nyaya Shastra equivalent to mathematical logic – now foundation for analysis by modern machines." },
    { icon: faFlask, text: "Kerala school of Mathematics discovered the calculus over two centuries prior to the calculus discovered by Newton" },
    { icon: faMicroscope, text: "Ancient Ayurveda uses tripartite analysis ( three doshas) since modern logic shows the ternary logic is more powerful than binary logic" },
    { icon: faBalanceScale, text: "Mendeleev was inspired by 2D structure of Sanskrit alphabet to propose similar 2D structure of chemical elements" },
    { icon: faLanguage, text: "Upanishads given much importance to discover more in quantum physics" },
    { icon: faRadiation, text: "Vedantic vision – radio science" },
  ];

  useEffect(() => {
    const boxes = scopeContainerRef.current.querySelectorAll(".box");
    const elementsToAnimate = [titleRef.current, descriptionRef.current, ...boxes];

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
    <div className="scope_container" ref={scopeContainerRef}>
      <div>
        <h1 style={{ textAlign: 'center',fontSize:'50px' }} className="scope_h1" ref={titleRef}>Scope</h1>
        <p className="scope_p" ref={descriptionRef}>
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
