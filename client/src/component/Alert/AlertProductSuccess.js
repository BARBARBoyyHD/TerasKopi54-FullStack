import React from 'react'
import { FaCheck } from 'react-icons/fa'

const AlertProductSuccess = ({onClose}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[300px] p-4 border border-black bg-green-600 text-white rounded-[10px] flex flex-col items-center">
            <h1 className="text-lg font-bold mb-4">Product added Successfully!</h1>
            <button
              onClick={onClose}
              className="mt-2 px-4 py-2 bg-white text-green-600 rounded-[5px] hover:bg-gray-200"
            >
              <FaCheck/>
            </button>
          </div>
        </div>
  )
}

export default AlertProductSuccess
