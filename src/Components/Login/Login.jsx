import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useSelector } from "react-redux";
import "./login.css";
import NumberInput from "./NumberInput";
import Pin from "./Pin";

const Login = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const showOtp = useSelector((store) => store.AuthReducer.showOtp);
  // console.log(showOtp);
  const [pinInput, setPinInput] = useState("");
  // console.log(pinInput);
  const isAuth = useSelector((reduxStore) => reduxStore.AuthReducer.isAuth);
  // console.log(isAuth);

  return (
    <>
      <button onClick={toggleDrawer}>
        {isAuth ? "Verified Customer" : "Login / Sign Up"}
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
        size={"360px"}
      >
        <h3 id="title">Please login to continue</h3>
        {/* <Pin length={6} perInputBox={1} setPin={setPinInput} /> */}
        {/* <NumberInput otp={pinInput} /> */}
        {showOtp ? (
          <Pin
            length={6}
            perInputBox={1}
            setPin={setPinInput}
            toggleDrawer={toggleDrawer}
          />
        ) : (
          <NumberInput />
        )}
      </Drawer>
    </>
  );
};

export default Login;
