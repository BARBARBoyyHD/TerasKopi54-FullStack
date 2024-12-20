import React from "react";
import Orderdetail from "./Orderdetail";
import ChartRevenue from "./ChartRevenue";
import ItemSold from "./ItemSold";
import AverageBasketSize from "./AverageBasketSize";
import MonthlyChart from "./MonthlyChart";
import TopProduct from "./TopProduct";

const DashboardPanel = () => {
  return (
    <div className="w-full max-w-screen-lg min-h-screen shadow-md rounded-lg p-4  bg-black  md:ml-0 md:mx-auto">
      <div>
        <div className="flex items-center mb-4 justify-center md:flex-col md:justify-start">
    
          <h1 className="text-2xl font-bold text-white">Sort by</h1>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="w-auto  flex flex-wrap justify-center gap-3">
          <div className="text-white w-[300px] h-[200px] rounded-md border-none  bg-[#7b59d7] flex justify-center items-center flex-col">
            <h1 className="text-2xl font-bold">Revenue</h1>
            <ChartRevenue />
          </div>
          <div className="text-white w-[300px] h-[200px] rounded-md  border-none bg-[#7b59d7] flex justify-center items-center flex-col">
            <h1 className="text-2xl font-bold">Item Sold</h1>
            <ItemSold />
          </div>
          <div className="text-white w-[300px] h-[200px] rounded-md  border-none bg-[#7b59d7] flex justify-center items-center flex-col">
            <h1 className="text-2xl font-bold">Average Basket Size</h1>
            <AverageBasketSize />
          </div>
        </div>
        <div className="w-auto  flex flex-wrap justify-center gap-3 mt-2">
          <div className="text-white w-[615px] h-[400px] border rounded-md flex justify-center items-center flex-col">
            <h1 className="font-bold">Monthly Chart</h1>
            <MonthlyChart />
          </div>
          <div className="text-white w-[300px] h-[400px] rounded-md border flex justify-center items-center flex-col">
            <h1 className="font-bold">Top Product</h1>
            <TopProduct />
          </div>
        </div>
        <div className="w-auto flex flex-wrap justify-center gap-3 mt-2">
          <div className="text-white w-full h-auto rounded-md border-none flex justify-center items-center">
            <Orderdetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPanel;
