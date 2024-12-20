import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8080");
const Orderdetail = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5; // Set the number of orders per page

  // Get current orders based on pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orderDetails.slice(indexOfFirstOrder, indexOfLastOrder);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Initialize socket connection and listen for data
  useEffect(() => {
    socket.on("AllOrders", (data) => {
      setOrderDetails(data);
    });

    // Cleanup the socket listener when the component unmounts
    return () => {
      socket.off("AllOrders");
    };
  }, []);

  return (
    <div className="container mx-auto my-4 px-4">
      <h1 className="text-xl font-semibold mb-4 text-center">Order Details</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Product Name</th>
              <th className="px-4 py-2 text-left">Product Category</th>
              <th className="px-4 py-2 text-left">Customer Name</th>
              <th className="px-4 py-2 text-left">Payment Method</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Total Price</th>
              <th className="px-4 py-2 text-left">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.order_id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{order.order_id}</td>
                <td className="px-4 py-2">{order.product_name}</td>
                <td className="px-4 py-2">{order.product_category}</td>
                <td className="px-4 py-2">{order.customer_name}</td>
                <td className="px-4 py-2">{order.payment_method}</td>
                <td className="px-4 py-2">{order.quantity_order}</td>
                <td className="px-4 py-2">{order.total_price}</td>
                <td className="px-4 py-2">{order.order_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-wrap justify-center mt-4 gap-2">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg font-medium">{currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastOrder >= orderDetails.length}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Orderdetail;
