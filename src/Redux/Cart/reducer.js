import React from "react";
import { ADD_CART_DATA } from "./actionTypes";

const initState = {
  cart: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_CART_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        cart: [...state.cart, action.payload],
      };
    case "GET_CART_DATA":
      return {
        ...state,
        isLoading: false,
        isError: false,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
