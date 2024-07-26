import { createContext, useReducer } from "react";

const initialState = {
  id: undefined,
  items: [],
  totalAmount: 0,
  deliveryFee: 0,
  discountPercentage: 0,
};

export const CartContext = createContext(initialState);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return state; // TODO: implement add item

    case "REMOVE_ALL":
      return initialState;

    case "CART_ERROR":
      return { ...state, id: action.payload };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
