import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./cart.css";
import img from "../../assets/cartempty.webp";

gsap.registerPlugin(ScrollTrigger);

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const paper = state?.paper || {};

  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartData);
    const initialQuantities = cartData.reduce((acc, item) => {
      acc[item.title] = 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);

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
  }, [cartItems, paymentSuccess]);

  useEffect(() => {
    const loadRazorpayScript = () => {
      if (document.getElementById('razorpay-script')) {
        setIsRazorpayLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.id = "razorpay-script";
      script.onload = () => setIsRazorpayLoaded(true);
      document.body.appendChild(script);
    };

    loadRazorpayScript();
  }, []);

  const handleQuantityChange = (title, newQuantity) => {
    setQuantities(prevQuantities => ({
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

  const freeShippingThreshold = 1800; // Adjusted threshold to match realistic cart totals
  const totalPrice = getTotalPrice();
  const amountForFreeShipping = Math.max(0, freeShippingThreshold - totalPrice);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const handleCheckoutClick = async () => {
    if (!isRazorpayLoaded) {
      console.error("Razorpay script not loaded.");
      return;
    }

    const orderData = {
      amount: totalPrice * 100, // Convert to paisa
      currency: "INR",
    };

    try {
      const response = await fetch('https://us-central1-vedik-78b04.cloudfunctions.net/createRazorpayOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();
      if (!result.orderId) throw new Error("Failed to create order");

      const options = {
        key: 'rzp_test_HVZCFfDTz5rdFC', // Your Razorpay key
        amount: result.amount, // Amount in paisa
        currency: result.currency,
        name: 'AppOrbis Tehcnologies Pvt.Ltd',
        description: 'Payment for research papers',
        order_id: result.orderId,
        handler: async function (response) {
          const paymentData = {
            orderId: result.orderId,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
            amount: result.amount,
            email: localStorage.getItem("userEmail"),
            name: localStorage.getItem("userName"),
            cart: cartItems,
          };

          await fetch('https://us-central1-vedik-78b04.cloudfunctions.net/savePaymentDetails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
          });

          localStorage.removeItem("cart");
          navigate("/thank-you");
        },
        prefill: {
          name: localStorage.getItem("userName"),
          email: localStorage.getItem("userEmail"),
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  if (!cartItems.length) {
    return (
      <div className="empty-cart">
        <img src={img} alt="Empty Cart" style={{ height: "35vh", width: "20vw" }} />
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
        <h2>Your Cart</h2>

        <div className="free-shipping">
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${Math.min((totalPrice / freeShippingThreshold) * 100, 100)}%`,
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
          <p>Subtotal ({cartItems.length} Items): ₹{totalPrice.toFixed(2)}</p>
          <h3>Total: ₹{(totalPrice + 2).toFixed(2)}</h3>
          <button onClick={handleCheckoutClick} className="pay-now-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
