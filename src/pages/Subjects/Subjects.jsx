import React, { useState } from 'react';
import Img_1 from "../../assets/subjects-1.jpg";
import Img_2 from "../../assets/subjects-2.jpg";
import Img_3 from "../../assets/subjects-3.jpg";
import Img_4 from "../../assets/subjects-4.png";
import Img_5 from "../../assets/subjects-5.png";

import "./subjects.css"; 

const Subjects = () => {
  const images = [
    { src: Img_1, title: "Mathematics and Computing" },
    { src: Img_2, title: "Public Administration" },
    { src: Img_3, title: "Linguistics" },
    { src: Img_4, title: "Astronomy" },
    { src: Img_5, title: "Languages" }
  ]; 
  
  return (
    <div>
      <h1 style={{textAlign:'center',marginTop:'5vh'}}>Subjects</h1>
      <h2 style={{textAlign:'center',marginTop:'2vh'}}>The following subjects like</h2>
      <div className="image-container">
        {images.map((img, index) => (
          <div key={index} className="image-wrapper">
          <img 
            key={index} 
            src={img.src} 
            alt={`Subject ${index + 1}`} 
            title={img.title} 
            className="image-box" 
          />
          <div className="image-title">{img.title}</div>
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
