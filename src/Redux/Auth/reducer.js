import { LOGIN_REQUEST, LOGIN_SUCCESS, SEND_OTP_SUCCESS } from "./actionTypes";

const initialState = {
  cell: "",
  showOtp: false,
  isAuth: false,
  inputBoxVal: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEND_OTP_SUCCESS:
      return {
        cell: payload,
        showOtp: true,
      };
    case LOGIN_REQUEST:
      return {
        inputBoxVal: payload,
      };
    case LOGIN_SUCCESS:
      return {
        isAuth: true,
      };
    default:
      return state;
  }
};

export { reducer };
