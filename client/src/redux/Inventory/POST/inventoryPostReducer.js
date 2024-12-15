import {
  POST_INVENTORY_REQUEST,
  POST_INVENTORY_SUCCESS,
  POST_INVENTORY_ERROR,
} from "./inventoryPostTypes";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const inventoryPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_INVENTORY_REQUEST:
      return { ...state, loading: true };
    case POST_INVENTORY_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case POST_INVENTORY_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default inventoryPostReducer;
