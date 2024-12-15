import React, { useState } from "react";
import AlertCheckoutSuccess from "../Alert/AlertCheckoutSuccess";

const ButtonCheckout = () => {
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  const handleCheckout = async () => {
    const customerName = document.getElementById("customerName")?.value?.trim();
    const paymentMethod = document.querySelector(
      'input[name="payment"]:checked'
    )?.value;

    if (!customerName || !paymentMethod) {
      alert("Please fill out all fields.");
      return;
    }

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    try {
      const response = await fetch("http://localhost:5000/api/add/order", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: customerName,
          payment_method: paymentMethod,
          total_price: totalPrice,
          cartItems,
        }),
      });

      if (response.ok) {
        setIsCheckoutSuccess(true); // Show success alert
        window.location.reload(); 
        localStorage.removeItem("cartItems"); // Clear cart
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("An error occurred during checkout. Please try again.");
    }
  };

  return (
    <div>
      <button
        onClick={handleCheckout}
        className="text-white p-2 bg-yellow-500 rounded-[5px]"
      >
        Checkout
      </button>

      {isCheckoutSuccess && (
        <AlertCheckoutSuccess onClose={() => setIsCheckoutSuccess(false)} />
      )}
    </div>
  );
};

export default ButtonCheckout;
