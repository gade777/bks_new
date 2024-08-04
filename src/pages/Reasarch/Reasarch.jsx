import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./research.css"; // Ensure this path is correct
import papers from "../../assets/researchPapers"; // Ensure this path is correct

gsap.registerPlugin(ScrollTrigger);

const Research = () => {
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const elements = imageContainerRef.current.children;

    // Initial animation
    const initialAnimation = gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // New animation to move gallery from left to right
    initialAnimation.eventCallback("onComplete", () => {
      gsap.fromTo(
        imageContainerRef.current,
        { x: -window.innerWidth },
        { x: 0, duration: 1, ease: "power3.out" }
      );
    });
  }, []);

  const handleButtonClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScmx7vIg2gm0RRPiZE-uS0BwvlmMlx8xPviHKZTVXSdYY3lUA/viewform", "_blank");
  };

  return (
    <div className="research-container">
      <div className="header">
        <h5><b>Research Paper</b></h5>
      </div>
      <main>
        <div id="gallery" ref={imageContainerRef}>
          {papers.map((paper, index) => (
            <figure key={index}>
              <img src={paper.img} alt={paper.title} />
              <figcaption>
                <button
                  aria-label={`Visit and download ${paper.title}`}
                  className="visit-button"
                  onClick={handleButtonClick}
                >
                  Visit & Download
                </button>
              </figcaption>
            </figure>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Research;
