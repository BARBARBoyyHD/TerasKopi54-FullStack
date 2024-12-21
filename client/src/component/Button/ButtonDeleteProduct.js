import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../../redux";

const ButtonDeleteProduct = ({ item_id }) => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.deleteProduct);
  const getData = useSelector((state) => state.getProducts);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getProducts());
    window.location.reload();
  };
  return (
    <button
      onClick={() => handleDelete(item_id)}
      className="text-red-500 hover:text-red-700"
    >
      <MdDelete />
    </button>
  );
};

export default ButtonDeleteProduct;
