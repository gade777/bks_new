import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";

// Importing images
import image1 from "../../assets/bks.png";
import image2 from "../../assets/logo.png";
import image3 from "../../assets/contact.jpg";
import image4 from "../../assets/contact.jpg";
import image5 from "../../assets/bks.png";
import image6 from "../../assets/dashboard-bg1.jpeg";
import image7 from "../../assets/dashboard-bg2.jpeg";
import image8 from "../../assets/dashboard-bg3.jpeg";

const images = [
  { src: image1, description: "Description for image 1" },
  { src: image2, description: "Description for image 2" },
  { src: image3, description: "Description for image 3" },
  { src: image4, description: "Description for image 4" },
  { src: image5, description: "Description for image 5" },
  { src: image6, description: "Description for image 6" },
  { src: image7, description: "Description for image 7" },
  { src: image8, description: "Description for image 8" },
];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="gallery_container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image_slide">
            <img src={image.src} alt={`Slide ${index + 1}`} className="slide_image" />
            <p className="image_description">{image.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
