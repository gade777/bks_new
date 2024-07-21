import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./cart.css";
// import img from "../../assets/cartempty.webp";

gsap.registerPlugin(ScrollTrigger);

const Cart = () => {
  const location = useLocation();
  const { state } = location;
  const paper = state?.paper || {};

  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartData);
    const initialQuantities = cartData.reduce((acc, item) => {
      acc[item.title] = 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);

    // Check if returning from payment page
    if (window.location.search.includes("payment=success")) {
      setPaymentSuccess(true);
      clearCart();
    }
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".cart-details",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".cart-details",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".summary",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".summary",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".payment-success",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".payment-success",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [cartItems, paymentSuccess]);

  const handleQuantityChange = (title, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [title]: newQuantity,
    }));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const priceAfterDiscount = item.price - (item.price * item.discount) / 100;
      return total + priceAfterDiscount * quantities[item.title];
    }, 0);
  };

  const freeShippingThreshold = 18;
  const totalPrice = getTotalPrice();
  const amountForFreeShipping = freeShippingThreshold - totalPrice;

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const handleCheckoutClick = () => {
    // Open payment link
    window.location.href = "https://rzp.io/i/lIeciUoS";

    // Clear cart after opening payment link
    setTimeout(() => {
      clearCart();
    }, 1000); // Adjust the timeout as needed
  };

  // Check if cart is empty
  if (!cartItems.length) {
    return (
      <div className="empty-cart">
        {/* <img src={img} alt="Empty Cart" /> */}
        <h2>Your cart is empty.</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/research" className="keep-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {paymentSuccess && (
        <div className="payment-success">
          <p>Payment Successful!</p>
          <button onClick={() => setPaymentSuccess(false)} className="close-popup-btn">Close</button>
        </div>
      )}
      <div className="cart-content">
        <h2>Your cart</h2>

        <div className="free-shipping">
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${(totalPrice / freeShippingThreshold) * 100}%`,
              }}
            ></div>
          </div>
          <p>
            {amountForFreeShipping > 0
              ? `Add ₹${amountForFreeShipping.toFixed(2)} more for free shipping`
              : "You have free shipping!"}
          </p>
        </div>

        {cartItems.map((item, index) => {
          const priceAfterDiscount = item.price - (item.price * item.discount) / 100;
          const itemTotalPrice = priceAfterDiscount * quantities[item.title];

          return (
            <div className="cart-details" key={index}>
              <img src={item.img} alt={item.title} className="paper-image" />
              <div className="paper-info">
                <h3>{item.title}</h3>
                <p>{quantities[item.title]} items</p>
              </div>
              <div className="quantity-container">
                <button
                  onClick={() =>
                    handleQuantityChange(
                      item.title,
                      Math.max(quantities[item.title] - 1, 1)
                    )
                  }
                >
                  -
                </button>
                <span>{quantities[item.title]}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(item.title, quantities[item.title] + 1)
                  }
                >
                  +
                </button>
              </div>
              <p className="price">₹{itemTotalPrice.toFixed(2)}</p>
            </div>
          );
        })}

        <div className="summary">
          <h3>Summary</h3>
          <p>
            Subtotal ({cartItems.length} Items): ₹{totalPrice.toFixed(2)}
          </p>
          <h3>Balance: ₹{(totalPrice + 2).toFixed(2)}</h3>
          <button onClick={handleCheckoutClick} className="pay-now-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
