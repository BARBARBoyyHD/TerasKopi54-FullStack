import React, { useState } from "react";
import AlertPractice from "../component/practice/AlertPractice";
import NavbarPractice from "../component/practice/NavbarPractice";
import ModalPractice from "../component/practice/ModalPractice";
import AlertSuccesPractice from "../component/practice/AlertSuccesPractice";

const Practice = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false); // State to manage success alert visibility

  const showAlert = () => {
    setIsAlertOpen(true); // Open alert
  };

  const showModal = () => {
    setIsModalOpen(true); // Open modal
  };

  return (
    <div className="min-h-screen bg-lime-300">
      <header>
        <NavbarPractice />
      </header>

      {/* Success alert */}
      {isAlertOpen && (
        <div className="absolute right-0 top-0 mt-4">
          <AlertPractice onClose={() => setIsAlertOpen(false)} />
        </div>
      )}

      {/* Main Content */}
      <div className="min-h-screen flex flex-col justify-center items-center border border-black">
        <h1>This is Practice Tailwind</h1>

        {/* Modal */}
        {isModalOpen && (
          <ModalPractice
            onClose={() => setIsModalOpen(false)}
            setIsSuccessOpen={setIsSuccessOpen}
          />
        )}
        <div className="absolute right-0 top-0 mt-4">
          {isSuccessOpen && (
            <AlertSuccesPractice onClose={() => setIsSuccessOpen(false)} />
          )}
        </div>

        <button
          onClick={showAlert}
          className="border border-black p-[10px] rounded-[10px] hover:bg-green-700 transition ease-out"
        >
          <h1 className="text-black hover:text-white">Click Me</h1>
        </button>

        <button
          onClick={showModal}
          className="border border-black p-[10px] rounded-[10px] hover:bg-green-700 transition ease-out"
        >
          <h1 className="text-black hover:text-white">Add Item</h1>
        </button>
      </div>
    </div>
  );
};

export default Practice;
