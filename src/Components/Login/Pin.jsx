import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import PinInput from "./PinInput";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import { loginSuccess } from "../../Redux/Auth/action";

const Pin = ({ length, perInputBox = 1, setPin, toggleDrawer }) => {
  const [inputBoxLength] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);
  const [inputBoxValue] = useState(new Array(length).fill(""));
  const cell = useSelector((store) => store.AuthReducer.cell);
  const [showTimer, setShowTimer] = useState(true);
  const [sec, setSec] = useState(30);
  const dispatch = useDispatch();

  useEffect(() => {
    let id = setTimeout(() => {
      setSec((prev) => prev - 1);
    }, 1000);
    if (sec === 0) {
      setShowTimer(false);
      return clearTimeout(id);
    }
  }, [sec]);

  const handleChange = (e, index) => {
    inputBoxValue[index] = e.target.value;
    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setPin(inputBoxValue.join(""));
  };

  const handleBackSpace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputBoxValue[index] = e.target.value;
    setPin(inputBoxValue.join(""));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length);
    data.forEach((item, index) => {
      inputBoxValue[index] = item;
      inputRef.current[index].value = item;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };

  const handleLogin = () => {
    if (inputBoxValue.length === 6) {
      const otp = inputBoxValue.join("");
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user.phoneNumber;
          console.log(user);
          dispatch(loginSuccess());
          toggleDrawer();
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          console.log(error);
        });
    }
  };
  // console.log(sec);
  return (
    <div>
      <div>
        <h3 id="enter">Enter verification code</h3>
        <div className="para">
          <p>We have a sent you a 6 digit OTP on {cell} </p>
          <button id="edit-btn">Edit</button>
        </div>
      </div>
      <div onPaste={handlePaste}>
        {inputBoxLength.map((_, index) => {
          return (
            <PinInput
              ref={(inputEl) => {
                inputRef.current[index] = inputEl;
              }}
              disabledBool={index >= 1}
              key={index}
              correctPassword={true}
              handleChange={(e) => handleChange(e, index)}
              handleBackSpace={(e) => handleBackSpace(e, index)}
              perInputBox={perInputBox}
            />
          );
        })}
      </div>
      <div>
        <div>
          {showTimer ? (
            <p className="timer">00 : {sec}</p>
          ) : (
            <button id="otp-btn">Resend OTP</button>
          )}
        </div>
        <div>
          {inputBoxValue.join("").length === 6 ? (
            <div>
              <button className="continue" onClick={handleLogin}>
                Login
              </button>
            </div>
          ) : (
            <button className="continue" id="disabled">
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pin;

Pin.propTypes = {
  length: PropTypes.number.isRequired,
  maxLength: PropTypes.number,
};
