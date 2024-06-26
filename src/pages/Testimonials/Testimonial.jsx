import React from 'react';
import Img1 from "../../assets/chaitali-maam.jpeg";
import Img2 from "../../assets/madhavi-maam.jpg";
import Img3 from "../../assets/sarika-maam.jpeg";
import Img4 from "../../assets/megha-maam.jpg";

// Define a Testimonial component for better reusability and performance
const TestimonialItem = React.memo(({ name, image, thoughts }) => (
 <div className="testimonial">
    <div className="testimonial-photo">
      <img src={image} alt={name} className="photo-background" />
      <div className="photo-author"></div>
    </div>
    <div className="testimonial-text">
      <br />
      <p>{thoughts}</p>
    </div>
    <div className="testimonial-author">{name}</div>
 </div>
));

// Define a function to dynamically render arrows and bullets
const renderElement = (elementType, index) => {
 switch (elementType) {
    case 'arrow':
      return (
        <div className={`arrow arrow-${index === 0 ? 'left' : 'right'}`}>
          <label htmlFor={`input-testimonial${index + 1}`}></label>
          <span></span>
        </div>
      );
    case 'bullet':
      return (
        <label htmlFor={`input-testimonial${index + 1}`}>
          <div className="bullet">
            <div>
              <span></span>
            </div>
          </div>
        </label>
      );
    default:
      return null;
 }
};

const Testimonial = () => {
 const testimonials = [
    {
      name: "Chaitali Maam",
      image: Img1,
      thoughts: "This is a great product!",
    },
    {
      name: "Madhavi Maam",
      image: Img2,
      thoughts: "I love using this service!",
    },
    {
      name: "Sarika Maam",
      image: Img3,
      thoughts: "Amazing experience!",
    },
    {
      name: "Megha Maam",
      image: Img4,
      thoughts: "Highly recommended!",
    },
    // Add more testimonials as needed
 ];

 return (
    <div className="testimonials">
      {testimonials.map((testimonial, index) => (
        <TestimonialItem key={index} {...testimonial} />
      ))}
      <div className="testimonials-arrows">
        {testimonials.map((_, index) => renderElement('arrow', index))}
      </div>
      <div className="testimonials-bullets">
        {testimonials.map((_, index) => renderElement('bullet', index))}
      </div>
    </div>
 );
};

export default Testimonial;
