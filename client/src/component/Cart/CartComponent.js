import React from 'react'
import { useSelector } from 'react-redux'
const CartComponent = () => {
    
    const cart = useSelector((state) => state.addToCart);

    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  
    return (
      <div className="w-full max-w-screen-lg min-h-screen p-4">
        <h1 className="text-xl font-bold mb-4">Your Cart</h1>
  
        {/* Cart Items */}
        <div className="flex flex-col gap-4">
          {cart.length === 0 && <p>Your cart is empty.</p>}
  
          {cart.map((item) => (
            <div key={item.product_id} className="flex justify-between items-center">
              <div className="flex gap-4">
                <img
                  src={`http://localhost:5000/${item.image_url}`}
                  alt={item.product_name}
                  className="w-[100px] h-[100px] object-cover rounded-md"
                />
                <div>
                  <p className="font-bold">{item.product_name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p className="text-green-600 font-semibold">
                    Price: Rp {item.price}
                  </p>
                  <p className="text-green-600 font-semibold">
                    Total: Rp {item.totalPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Total Price */}
        {cart.length > 0 && (
          <div className="mt-4 text-lg font-semibold">
            <p>Total Price: Rp {totalPrice}</p>
          </div>
        )}
      </div>
    )
}

export default CartComponent
