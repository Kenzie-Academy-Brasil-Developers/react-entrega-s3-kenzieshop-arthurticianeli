import { ADD_PRODUCT } from "./actionTypes";
import { REMOVE_PRODUCT } from "./actionTypes";

const cartReducer = (state = [], action) => {
  const { product } = action;

  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, product];

    case REMOVE_PRODUCT:
      return state.filter((e) => e.name !== product.name);

    default:
      return state;
  }
};

export default cartReducer;
