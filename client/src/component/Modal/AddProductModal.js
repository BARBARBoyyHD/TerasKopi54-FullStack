import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProduct } from "../../redux";
import { getProducts } from "../../redux";
import AlertProductSuccess from "../Alert/AlertProductSuccess";
const AddProductModal = () => {
  const [success, setSuccess] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    product_name: "",
    product_category: "",
    price: 0,
    image_url: null, // Updated to handle files
  });

  const { loading, data, error } = useSelector((state) => state.postProduct);
  const AllProduct = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setFormData({
      product_name: "",
      product_category: "",
      price: 0,
      image_url: null,
    });
  };

  const handleChange = (e) => {
    const { id, value, files } = e.target;

    if (id === "image_url") {
      // Update image file
      setFormData((prevState) => ({
        ...prevState,
        image_url: files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data for submission
    const formDataToSend = new FormData();
    formDataToSend.append("product_name", formData.product_name);
    formDataToSend.append("product_category", formData.product_category);
    formDataToSend.append("price", formData.price);

    if (formData.image_url) {
      formDataToSend.append("image", formData.image_url);
    }

    // Dispatch the form data
    dispatch(postProduct(formDataToSend));
    setIsModalVisible(false);
    window.location.reload();
  };

  return (
    <div>
      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Item
      </button>
      {success && <AlertProductSuccess onClose={() => setSuccess(false)} />}
      {/* Modal */}
      {isModalVisible && (
        <div className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[400px] relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add New Item
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-4 md:p-5">
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="product_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="product_name"
                    value={formData.product_name}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter product name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="product_category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Category
                  </label>
                  <input
                    type="text"
                    id="product_category"
                    value={formData.product_category}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter product category"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter price"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="image_url"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Image
                  </label>
                  <input
                    type="file"
                    id="image_url"
                    accept="image/jpeg, image/png, image/jpg"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
                {error && <p className="mt-4 text-red-500">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProductModal;
