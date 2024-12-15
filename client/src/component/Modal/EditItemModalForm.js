import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInventory, getSingleInventory, putInventory } from "../../redux";
import { RiPencilFill } from "react-icons/ri";

const EditItemModalForm = ({ itemId }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    item_name: "",
    quantity: "",
    price_per_pcs: "",
  });

  const dispatch = useDispatch();
  const { data: singleItemData, loading: loadingSingleItem } = useSelector(
    (state) => state.getSingleInventory
  );
  const { loading: updateLoading, error: updateError } = useSelector(
    (state) => state.putInventory
  );

  // Open the modal and fetch the item data
  const openModal = () => {
    setIsModalVisible(true);
    dispatch(getSingleInventory(itemId));
  };

  // Close the modal
  const closeModal = () => setIsModalVisible(false);

  // Populate the form when singleItemData changes
  useEffect(() => {
    if (singleItemData) {
      setFormData({
        item_name: singleItemData.item_name || "",
        quantity: singleItemData.quantity || "",
        price_per_pcs: singleItemData.price_per_pcs || "",
      });
    }
  }, [singleItemData]);

  // Handle form changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    dispatch(putInventory(itemId, formData)).then(() => {
      dispatch(getInventory()); // Re-fetch the updated inventory
      closeModal(); // Close the modal
    });
  };

  return (
    <div>
      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="block text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <RiPencilFill />
      </button>

      {/* Modal */}
      {isModalVisible && (
        <div className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[400px] relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Edit Item
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
              {loadingSingleItem ? (
                <p>Loading item details...</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="item_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Item Name
                    </label>
                    <input
                      type="text"
                      id="item_name"
                      value={formData.item_name}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter item name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="quantity"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter quantity"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price_per_pcs"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Price Per Piece
                    </label>
                    <input
                      type="number"
                      id="price_per_pcs"
                      value={formData.price_per_pcs}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter price per piece"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    disabled={updateLoading}
                  >
                    {updateLoading ? "Updating..." : "Update Item"}
                  </button>
                  {updateError && (
                    <p className="mt-4 text-red-500">{updateError}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditItemModalForm;
