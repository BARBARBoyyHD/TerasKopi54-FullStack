import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { getInventory } from "../../redux";
import { deleteInventory } from "../../redux";

const ButtonDeleteInventory = ({ itemId }) => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state) => state.deleteInventory
  );

  const getData = useSelector((state)=> state.getInventory)
  const handleDelete = (id) => {
    dispatch(deleteInventory(id));
    dispatch(getInventory());
    window.location.reload();
  };

  return (
    <button
      onClick={() => handleDelete(itemId)}
      className="text-red-500 hover:text-red-700"
    >
      <MdDelete />
    </button>
  );
};

export default ButtonDeleteInventory;
