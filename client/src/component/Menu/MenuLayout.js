import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, addToCart } from "../../redux"; // Import your action creator
import { FaPlus, FaMinus } from "react-icons/fa";

const MenuLayout = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.getProducts);
  const cart = useSelector((state) => state.addToCart); // Assuming you have cart state in Redux

  const [searchTerm, setSearchTerm] = useState("");
  const [quantities, setQuantities] = useState({}); // Object to track quantity per product

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    const quantity = quantities[product.product_id] || 1; // Default to 1 if no quantity is set
    const totalPrice = product.price * quantity;
    const updatedProduct = { ...product, quantity, totalPrice };
    dispatch(addToCart(updatedProduct)); // Dispatch the product with total price to the cart
  };

  const handleIncrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1, // Increment the quantity for this specific product
    }));
  };

  const handleDecrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(1, (prevQuantities[productId] || 1) - 1), // Decrement with a minimum value of 1
    }));
  };

  // Filter products based on the search term
  const filteredProducts = Array.isArray(data)
    ? data.filter((product) =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="w-full max-w-screen-lg min-h-screen p-4">
      {/* Search Bar */}
      <div className="flex justify-end mb-4">
        <div className="flex items-center border border-green-400 p-2 rounded-[5px] bg-white">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            className="w-full pl-0 outline-none rounded-none"
            type="search"
            placeholder="Search Menu"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap gap-3 justify-center">
        {/* Loading State */}
        {loading && <p>Loading...</p>}

        {/* Error State */}
        {error && <p className="text-red-500">Error: {error}</p>}

        {/* No Products Found */}
        {!loading && !error && filteredProducts.length === 0 && (
          <p>No products match your search criteria.</p>
        )}

        {/* Product Data */}
        {!loading &&
          !error &&
          filteredProducts.map((product) => {
            const productQuantity = quantities[product.product_id] || 1;
            return (
              <div
                key={product.product_id}
                className="w-[300px] h-[350px] border rounded-md bg-white flex flex-col items-center justify-start p-4 shadow-sm"
              >
                <img
                  src={`http://localhost:5000/${product.image_url}`} // Assuming the images are served from this path
                  alt={product.product_name}
                  className="w-full h-[200px] object-cover rounded-md"
                />
                <h3 className="text-lg font-bold mt-2">{product.product_name}</h3>
                <p className="text-sm text-gray-500">
                  Category: {product.product_category}
                </p>
                <p className="text-green-600 font-semibold">
                  Price: Rp {product.price}
                </p>
                <div className="flex gap-2 items-center">
                  {/* Increment/Decrement Buttons */}
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => handleDecrement(product.product_id)}
                      className="p-2 bg-gray-200 rounded-md"
                    >
                      <FaMinus />
                    </button>
                    <span>{productQuantity}</span>
                    <button
                      onClick={() => handleIncrement(product.product_id)}
                      className="p-2 bg-gray-200 rounded-md"
                    >
                      <FaPlus />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="p-2 rounded-[10px] border border-[#f6b100] bg-[#f6b100] text-[#f5f5f5]"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MenuLayout;
