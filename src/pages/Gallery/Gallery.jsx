import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";

import image1 from "../../assets/img_1.jpeg";
import image2 from "../../assets/img_2.jpeg";
import image3 from "../../assets/img_3.jpeg";
import image4 from "../../assets/img_4.jpeg";
import image5 from "../../assets/img_5.jpeg";
import image6 from "../../assets/img_6.jpeg";
import image7 from "../../assets/img_7.jpeg";
import image8 from "../../assets/img_8.jpeg";
import image15 from "../../assets/img_9.jpeg";
import image9 from "../../assets/img_10.jpeg";
import image10 from "../../assets/img_11.jpeg";
import image11 from "../../assets/img_12.jpeg";
import image12 from "../../assets/img_13.jpeg";
import image13 from "../../assets/img_14.png";
import image14 from "../../assets/img_15.png";

const images = [
  { src: image1, description: "" },
  { src: image2, description: "Vice President- MGM Alumini Association 2" },
  { src: image3, description: "Lead the NGO for Woman and Kids Empowerment in Cultural Attributes 2" },
  { src: image4, description: "Lead the NGO for Woman and Kids Empowerment in Cultural Attributes 6" },
  { src: image5, description: "" },
  { src: image6, description: "Invited in Dainik Bhaskar Social Meeting" },
  { src: image7, description: "Lead the NGO for Woman and Kids Empowerment in Cultural Attributes 6" },
  { src: image8, description: "Lead the NGO for Woman and Kids Empowerment in Cultural Attributes 3" },
  { src: image9, description: "Vice President- MGM Alumini Association 1" },
  { src: image10, description: "Participated in Women Economic Forum (ALL - Ladies League Kerala Chapter) at IIM Kozhikode" },
  { src: image11, description: "Vice President- MGM Alumini Association 2" },
  { src: image12, description: "Participated in Women Economic Forum (ALL - Ladies League Kerala Chapter) at IIM Kozhikode" },
  { src: image13, description: "Lead the NGO for Woman and Kids Empowerment in Cultural Attributes 1" },
  { src: image14, description: "" },
  { src: image15, description: "" },
];

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
          dots: false,
        }
      }
    ]
  };

  return (
    <div className="gallery_container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image_slide">
            <div className="slide_image_wrapper">
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="slide_image"
              />
              <div
                className={`overlay ${
                  image.description ? "has-text" : ""
                }`}
              >
                {image.description || "Hover to know more"}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
