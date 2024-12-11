import React from 'react';

const AlertLogin = ({ message, onClose }) => {
  if (!message) return null; // Don't render anything if there's no error message

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center justify-between bg-red-500 text-white px-4 py-2 rounded shadow-lg">
        <span className="text-sm font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-white font-bold hover:text-gray-200"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default AlertLogin;
