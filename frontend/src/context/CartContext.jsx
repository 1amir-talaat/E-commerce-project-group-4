import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        items: action.payload.items,
        total: action.payload.total,
        itemCount: action.payload.items.length,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
        itemCount: state.itemCount + 1,
      };
    case "REMOVE_FROM_CART":
      const updatedItems = state.items.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        items: updatedItems,
        total: state.total - action.payload.price,
        itemCount: state.itemCount - 1,
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  return <CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
