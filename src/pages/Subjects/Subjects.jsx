import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img_1 from "../../assets/subjects-1.jpg";
import Img_2 from "../../assets/subjects-2.jpg";
import Img_3 from "../../assets/subjects-3.jpg";
import Img_4 from "../../assets/subjects-4.png";
import Img_5 from "../../assets/subjects-5.png";
import "./subjects.css"; 

gsap.registerPlugin(ScrollTrigger);

const Subjects = () => {
  const imageContainerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageContainerRef.current.children,
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
  }, []);

  const images = [
    { src: Img_1, title: "Mathematics and Computing Explore advanced concepts in Mathematics and Computing with experienced instructors." },
    { src: Img_2, title: "Public Administration Gain insights into Public Administration with comprehensive courses and expert guidance." },
    { src: Img_3, title: "Linguistics Delve into the study of language with our Linguistics courses and resources." },
    { src: Img_4, title: "Astronomy Discover the wonders of the universe through our Astronomy programs and lectures." },
    { src: Img_5, title: "Literature Explore classic and contemporary literature with engaging study materials and discussions." }
  ]; 
  
  return (
    <div>
      <h1 style={{textAlign:'center', marginTop:'5vh'}}>Subjects</h1>
      <h2 style={{textAlign:'center', marginTop:'2vh'}}>The following subjects like</h2>
      <div className="image-container" ref={imageContainerRef}>
        {images.map((img, index) => (
          <div key={index} className="image-wrapper">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img 
                    src={img.src} 
                    alt={`Subject ${index + 1}`} 
                    className="image-box" 
                  />
                </div>
                <div className="flip-card-back">
                  <div className="image-title">{img.title}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="know-more-button">To Know More About Detail Concepts of Subjects</button>
      </div>
    </div>
  );
};

export default Subjects;
