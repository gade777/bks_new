import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./reasarch.css";
import papers from "../../assets/researchPapers";

const Research = () => {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const navigate = useNavigate();

  const handleVisitClick = (paper) => {
    setSelectedPaper(paper);
  };

  const handleAddToCartClick = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(selectedPaper);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  const closePopup = () => {
    setSelectedPaper(null);
  };

  return (
    <div className="research-container">
      <div className="header">
        <h5>
          <b>Research Paper</b>
        </h5>
      </div>
      <main>
        <div id="gallery">
          {papers.map((paper, index) => (
            <figure key={index}>
              <img src={paper.img} alt={paper.title} />
              <figcaption>
                <button
                  onClick={() => handleVisitClick(paper)}
                  aria-label={`Visit and download ${paper.title}`}
                  className="visit-button"
                >
                  Visit & Download
                </button>
              </figcaption>
            </figure>
          ))}
        </div>
        {selectedPaper && (
          <div className="popup" role="dialog" aria-labelledby="popup-title">
            <div className="popup-content">
              <h2 id="popup-title">{selectedPaper.title}</h2>
              <p>{selectedPaper.description}</p>
              <p>
                Price: ₹{selectedPaper.price}{" "}
                <span className="discount">Discount: {selectedPaper.discount}%</span>
              </p>
              <div className="popup-buttons">
                <button onClick={handleAddToCartClick} className="add-to-cart-button">
                  Add to Cart
                </button>
                <button onClick={closePopup} className="close-button">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Research;
