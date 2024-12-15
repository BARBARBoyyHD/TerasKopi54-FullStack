import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonCheckout from "../Button/ButtonCheckout";
import { useNavigate } from "react-router-dom";

const CartComponent = () => {
  // Access cart state from Redux
  const dispatch = useDispatch(); // Fixed typo
  const cartItems = useSelector((state) => state.addToCart.cartItems);
  const navigate = useNavigate();

  // Handlers for increment, decrement, and remove actions
  const handleIncrement = (productId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: productId });
  };

  const handleDecrement = (productId) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: productId });
  };

  const handleRemoveItem = (productId) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
  };

  const handleShop = ()=>{
    navigate("/pages/Menu")
  }

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full max-w-screen-lg min-h-screen p-4">
      <h1 className="text-xl font-bold mb-4 text-white">Your Cart</h1>

      {/* Cart Items */}
      <div className="flex flex-col gap-4">
        {cartItems.length === 0 && (
          <div className="flex justify-center items-center flex-col gap-2">
                <p className="text-white text-center">Your cart is empty.</p>
                <button  onClick={handleShop} className="p-2 text-white font-bold bg-yellow-500 rounded-[5px]">Shop Now !</button>
          </div>
          
        )}

        {cartItems.map((item) => (
          <div
            key={item.product_id}
            className="flex justify-between items-center p-4  border-t-[2px]"
          >
            <div className="flex gap-4">
              <div className="flex flex-col justify-center gap-2">
                <img
                  src={`http://localhost:5000/${item.image_url}`}
                  alt={item.product_name}
                  className="w-[100px] h-[100px] object-cover rounded-md"
                />
                <button
                  onClick={() => handleRemoveItem(item.product_id)}
                  className="text-white bg-red-500 px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>

              <div className="flex flex-col justify-center items-start">
                <p className="font-bold text-lg text-white">
                  {item.product_name}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-wrap  gap-4 items-center justify-center ">
                  <div className="flex flex-wrap justify-center items-center"></div>
                  <button
                    onClick={() => handleIncrement(item.product_id)}
                    className="text-white bg-green-500 px-3 py-1 rounded font-bold"
                  >
                    +
                  </button>
                  <div>
                    <p className="text-white">{item.quantity}</p>
                  </div>
                  <button
                    onClick={() => handleDecrement(item.product_id)}
                    className="text-white bg-red-500 px-3 py-1  rounded font-bold"
                  >
                    -
                  </button>
                </div>
                <div className="flex flex-end justify-center items-center ">
                  <p className="text-white font-semibold">
                    Total: Rp{" "}
                    {(item.price * item.quantity).toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total Price */}
      {cartItems.length > 0 && (
        <div className="mt-6 p-4 border-t text-lg font-semibold justify-between flex flex-wrap gap-2">
          <div className="flex flex-col">
            <form action="" className="flex flex-col gap-2">
              <label className="text-white">Customer Name : </label>
              <input type="text" id="customerName" className="p-1 rounded-[5px]" placeholder="Enter Customer Name"/>
              <label className="text-white">Payment method : </label>
              <div className="flex flex-col ">
                <div className="gap-4 flex">
                  <label className="text-white">Cash </label>
                  <input type="radio" name="payment" id="" value={"Cash"}/>
                  <label className="text-white">QRIS </label>
                  <input type="radio" name="payment" id="" value={"QRIS"}/>
                  <label className="text-white">Debit </label>
                  <input type="radio" name="payment" id="" value={"Debit"}/>
                </div>
               
                
              </div>
            </form>
          </div>
          <div className="flex flex-col">
            <p className="text-white">
              Total Price: Rp {totalPrice.toLocaleString("id-ID")}
            </p>
            <ButtonCheckout/>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
