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
      return addItem(state, action.payload);

    case "REMOVE_ALL":
      return initialState;

    case "CART_ERROR":
      return { ...state, id: action.payload };

    default:
      return state;
  }
};

const addItem = (currentState, payload) => {
  const updatedItems = [...currentState.items];

  const existingItemIndex = updatedItems.findIndex(
    (item) =>
      item.productId === payload.productId &&
      item.product_variant.variant === payload.product_variant.variant
  );

  if (existingItemIndex !== -1) {
    updatedItems[existingItemIndex].quantity += payload.quantity;
  } else {
    updatedItems.push(payload);
  }

  const newTotalAmount =
    currentState.totalAmount +
    payload.product_variant.product.price * payload.quantity;

  const newDeliveryFee = newTotalAmount / 10;
  const newDiscountPercentage = newTotalAmount > 500 ? 5 : 0;

  return {
    ...currentState,
    items: updatedItems,
    totalAmount: newTotalAmount,
    deliveryFee: newDeliveryFee,
    discountPercentage: newDiscountPercentage,
  };
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
