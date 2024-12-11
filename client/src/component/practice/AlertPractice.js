import React from 'react'

const AlertPractice = ({onClose}) => {
    
  return (
    <div >
      <div className=' w-[200px] border border-black flex justify-center bg-red-600 rounded-l-[10px]'>
        <h1 className='text-white font-bold'>This is Alert</h1>
        <button
          onClick={onClose}
          className="ml-6 text-white font-bold hover:text-gray-200"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default AlertPractice
