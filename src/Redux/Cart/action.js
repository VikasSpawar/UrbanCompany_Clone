import axios from "axios";
import { ADD_CART_DATA } from "./actionTypes";

const getCartSuccess = (payload) => {
  return {
    type: "GET_CART_DATA",
    payload: payload,
  };
};

const addCartData = (payload) => {
  return {
    type: ADD_CART_DATA,
    payload: payload,
  };
};

const postCartData = (payload) => (dispatch) => {
  // console.log(payload)

  axios
    .post("https://urban-server-new.onrender.com/cart_data", payload)
    .then((res) => {
      dispatch(getCartData());
    });
};

const getCartData = (params) => (dispatch) => {
  // dispatch(getProductReq())

  return axios
    .get(`https://urban-server-new.onrender.com/${"cart_data"}`)
    .then((res) => {
      // console.log(res.data)
      // setTempData(res.data)
      dispatch(getCartSuccess(res.data));
    });
};
export { getCartData, addCartData, postCartData };
