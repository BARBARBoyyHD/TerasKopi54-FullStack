import React from "react";

const DashboardPanel = () => {
  return (
    <div className="w-full max-w-screen-lg min-h-screen shadow-md rounded-lg p-4  bg-black  md:ml-0 md:mx-auto">
      <div>
        <div className="flex items-center mb-4 justify-center justify-between md:flex-col md:justify-start">
          <h1 className=" text-white text-2xl font-bold flex justify-center items-center">
            This Month Overview
          </h1>
          <h1 className="text-2xl font-bold text-white">Sort by</h1>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="w-auto  flex flex-wrap justify-center gap-3">
          <div className="text-white w-[300px] h-[200px] rounded-md border border-red-600 flex justify-center items-center">
            Revenue
          </div>
          <div className="text-white w-[300px] h-[200px] rounded-md border border-red-600 flex justify-center items-center">
            ItemSold
          </div>
          <div className="text-white w-[300px] h-[200px] rounded-md border border-red-600 flex justify-center items-center">
            ABS
          </div>
        </div>
        <div className="w-auto  flex flex-wrap justify-center gap-3 mt-2">
          <div className="text-white w-[615px] h-[300px] border rounded-md border-red-600 flex justify-center items-center">
            Chart Monthly
          </div>
          <div className="text-white w-[300px] h-[300px] rounded-md border border-red-600 flex justify-center items-center">
            Top Product
          </div>
        </div>
        <div className="w-auto flex flex-wrap justify-center gap-3 mt-2">
          <div className="text-white w-[930px] h-[600px] rounded-md border border-red-600 flex justify-center items-center">
            Order Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPanel;
