import axios from "axios";

const getProductReq = () => {
  return {
    type: "PRODUCT_REQ",
  };
};
const getProductSuccess = (payload) => {
  return { type: "PRODUCT_SUCCESS", payload: payload };
};

const getProductData = (params) => (dispatch) => {
  dispatch(getProductReq());

  axios.get(`https://urban-server-new.onrender.com/${params}`).then((res) => {
    // console.log(res.data)
    // setTempData(res.data)
    dispatch(getProductSuccess(res.data));
  });
};

export { getProductData, getProductSuccess };

// getCartData=()=>(dispatch)=>{

// }
