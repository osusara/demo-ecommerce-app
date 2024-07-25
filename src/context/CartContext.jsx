import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  id: undefined,
  items: [],
  totalAmount: 0,
  deliveryFee: 0,
  discountPercentage: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return addItem(state, action.payload);

    case "ADD_ITEMS":
      return addItems(action.payload);

    case "REMOVE_ALL":
      return initialState;

    default:
      return state;
  }
};

const addItem = async (currentState, payload) => {
  const updatedItems = [...currentState.items, payload];

  const newTotalAmount =
    currentState.totalAmount +
    payload.product_variant.product.price * payload.quantity;

  const newDeliveryFee = newTotalAmount / 10;
  const newDiscountPercentage = newTotalAmount > 500 ? 5 : 0

  return {
    ...currentState,
    items: updatedItems,
    totalAmount: newTotalAmount,
    deliveryFee: newDeliveryFee,
    discountPercentage: newDiscountPercentage,
  };
};

const addItems = (payload) => {
  let newTotalAmount = 0;
  payload.items.forEach(
    (item) =>
      (newTotalAmount = item.product_variant.product.price * item.quantity)
  );

  const newDeliveryFee = newTotalAmount / 10;
  const newDiscountPercentage = newTotalAmount > 500 ? 5 : 0;

  return {
    id: payload.id,
    items: payload.items,
    totalAmount: newTotalAmount,
    deliveryFee: newDeliveryFee,
    discountPercentage: newDiscountPercentage,
  };
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
