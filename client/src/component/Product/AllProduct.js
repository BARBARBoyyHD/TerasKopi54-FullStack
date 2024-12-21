import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import AddProductModal from "../Modal/AddProductModal";
import EditItemModalForm from "../Modal/EditItemModalForm";
import EditProductModal from "../Modal/EditProductModal";
import ButtonDeleteProduct from "../Button/ButtonDeleteProduct";


const AllProduct = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.getProducts);

  // States for search and pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Filter data based on search term
  const filteredProducts = Array.isArray(data)
    ? data.filter((product) =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Pagination logic
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">All Products</h1>

      {/* Search Bar */}
      <div className="mb-4 flex justify-end gap-2">
        <input
          type="text"
          className="border rounded-md p-2 w-full max-w-sm"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <AddProductModal/>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left bg-white rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4">Product ID</th>
              <th className="p-4">Product Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Image</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan="5" className="p-4 text-center">
                  Loading...
                </td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan="5" className="p-4 text-center text-red-500">
                  Error: {error}
                </td>
              </tr>
            )}
            {!loading &&
              currentItems.map((product) => (
                <tr key={product.product_id} className="border-b">
                  <td className="p-4">{product.product_id}</td>
                  <td className="p-4">{product.product_name}</td>
                  <td className="p-4">{product.product_category}</td>
                  <td className="p-4">Rp {product.price}</td>
                  <td className="p-4">
                    <img
                      src={`http://localhost:5000/${product.image_url}`}
                      alt={product.product_name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td
                    colSpan="5"
                    className=" text-2xl flex text-center gap-4 mt-8"
                  >
                    {/* Edit button */}
                   
                      <EditProductModal item_id = {product.product_id}/>
                   
                    {/* Delete button */}
                   
                    <ButtonDeleteProduct item_id={product.product_id}/>
                    
                  </td>
                </tr>
              ))}
            {!loading && !currentItems.length && (
              <tr>
                <td colSpan="5" className="p-4 text-center">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`mx-1 px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
