import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInventory } from "../../redux";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import AddItemModalForm from "../Modal/AddItemModalForm";
import axios from "axios";
import ButtonDeleteInventory from "../Button/ButtonDeleteInventory";
import EditItemModalForm from "../Modal/EditItemModalForm";
const AllInventoryComponent = () => {
  const dispatch = useDispatch();
  const {
    loading,
    data: inventory,
    error,
  } = useSelector((state) => state.getInventory);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    dispatch(getInventory());
  }, [dispatch]);

  // Filtered inventory based on search term
  const filteredInventory = inventory?.filter((item) =>
    item.item_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalItems = filteredInventory?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredInventory?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleEdit = (id) => {
    console.log("Edit item with ID:", id);
    // Add your edit logic here
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>

      {/* Search Bar */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg p-2 w-full"
        />
        <AddItemModalForm />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Item Name</th>
              <th className="px-4 py-2 border-b">Quantity</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Added</th>
              <th className="px-4 py-2 border-b">Updated</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-red-500">
                  Error: {error}
                </td>
              </tr>
            )}
            {!loading && !error && currentItems?.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No inventory items found.
                </td>
              </tr>
            )}
            {!loading &&
              !error &&
              currentItems?.map((item) => (
                <tr key={item.item_id} className="border-b">
                  <td className="px-4 py-2">{item.item_id}</td>
                  <td className="px-4 py-2">{item.item_name}</td>
                  <td className="px-4 py-2">{item.quantity}</td>
                  <td className="px-4 py-2">Rp {item.price_per_pcs}</td>
                  <td className="px-4 py-2">{item.AddedAt}</td>
                  <td className="px-4 py-2">{item.UpdatedAt}</td>
                  <td className="px-4 py-2 flex gap-2 justify-center">
                    <EditItemModalForm itemId={item.item_id} />
                    <ButtonDeleteInventory itemId={item.item_id} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllInventoryComponent;
