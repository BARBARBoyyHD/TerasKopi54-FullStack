import React, { useState } from "react";

const ModalPractice = ({ onClose, setIsSuccessOpen }) => {
  const handleSuccess = () => {
    setIsSuccessOpen(true); // Trigger the success alert
    onClose(); // Close the modal after success
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="flex flex-col border border-black w-[500px] h-[400px] bg-white/30 backdrop-blur-lg shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-black">This is Modal</h1>
          <button className="text-black text-lg" onClick={onClose}>X</button>
        </div>

        <form action="" className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-black">Add Item</label>
            <input type="text" name="" id="" className="p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex justify-between items-center">
            <label className="text-black">Quantity</label>
            <input type="number" name="" id="" className="p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="button" // Prevent form submission behavior
              onClick={handleSuccess} // Trigger success
              className="bg-blue-500 text-black p-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalPractice;
