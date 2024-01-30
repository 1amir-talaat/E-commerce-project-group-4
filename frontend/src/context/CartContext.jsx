import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";

const CartContext = createContext();

const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
  allItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        items: action.payload || [],
        total: calculateTotal(action.payload || []),
        itemCount: calculateItemCount(action.payload || []),
      };
    case "ADD_TO_CART":
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === newItem.id);

      let updatedItems;
      if (existingItemIndex !== -1) {
        console.log("asdsad");
        updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
      } else {
        updatedItems = [...state.items, newItem];
      }

      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
        itemCount: calculateItemCount(updatedItems),
      };
    case "REMOVE_FROM_CART":
      const removedItemId = action.payload.id;
      const updatedItemsAfterRemoval = state.items.filter((item) => item.id !== removedItemId);
      return {
        ...state,
        items: updatedItemsAfterRemoval,
        total: calculateTotal(updatedItemsAfterRemoval),
        itemCount: calculateItemCount(updatedItemsAfterRemoval),
      };
    case "GET_ALL_ITEMS":
      return {
        ...state,
        allItems: getAllItems(state.items),
      };

    case "SET_CART_LOCAL_STORAGE":
      return {
        ...state,
        items: action.payload || [],
        total: calculateTotal(action.payload || []),
        itemCount: calculateItemCount(action.payload || []),
      };
    default:
      return state;
  }
};

const calculateTotal = (items) => {
  return items.reduce((total, item) => {
    const productPrice = item.Product && item.Product.price ? item.Product.price : 0;
    return total + productPrice * item.quantity;
  }, 0);
};

const calculateItemCount = (items) => {
  return items.length;
};

const getAllItems = (items) => {
  return items.map((item) => ({
    id: item.id,
    userId: item.userId,
    productId: item.productId,
    quantity: item.quantity,
  }));
};

const api = axios.create({
  baseURL: "http://localhost:5001",
});

const CartProvider = ({ children }) => {
  const { user } = useAuth();

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      dispatch({ type: "SET_CART_LOCAL_STORAGE", payload: storedCart });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
  }, [state.items]);

  const getAllCartItems = async () => {
    try {
      const response = await api.get("/cart/itemse");
      dispatch({ type: "SET_CART", payload: response.data });
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const addToCart = async (productId, quantity) => {
    try {
      console.log(productId);
      const response = await api.post("/cart/add", { productId, quantity, userId: user.id });
      dispatch({ type: "ADD_TO_CART", payload: response.data });

      getAllCartItems();
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error;
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      await api.delete(`/cart/remove/${cartItemId}`, { data: { userId: user.id } });
      dispatch({ type: "REMOVE_FROM_CART", payload: { id: cartItemId } });
    } catch (error) {
      console.error("Error removing item from cart:", error);
      throw error;
    }
  };

  return <CartContext.Provider value={{ ...state, addToCart, removeFromCart, getAllCartItems }}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
