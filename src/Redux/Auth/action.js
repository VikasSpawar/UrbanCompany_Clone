import { LOGIN_REQUEST, LOGIN_SUCCESS, SEND_OTP_SUCCESS } from "./actionTypes";

export const sendOtp = (payload) => {
  return {
    type: SEND_OTP_SUCCESS,
    payload,
  };
};

export const loginRequest = (payload) => {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};
