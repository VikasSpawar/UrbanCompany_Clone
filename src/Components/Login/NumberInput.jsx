import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "./login.css";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { authentication } from "./firebase";
import { useDispatch } from "react-redux";
import { sendOtp } from "../../Redux/Auth/action";

const NumberInput = ({ otp }) => {
  const [num, setNum] = useState("");
  const dispatch = useDispatch();

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // recaptcha resolved
        },
      },
      authentication
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    if (num.length >= 12) {
      // setShowOtp(true);
      const phoneNumber = "+" + num;
      generateRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          dispatch(sendOtp(phoneNumber));
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div>
      <form onSubmit={onSignInSubmit}>
        <PhoneInput
          inputProps={{
            name: "phone",
            required: true,
            autoFocus: true,
          }}
          country={"in"}
          onlyCountries={["in", "us", "sg", "sa", "ae"]}
          className="input"
          inputStyle={{
            width: "270px",
            height: "50px",
            marginLeft: "40px",
            fontSize: "18px",
          }}
          buttonStyle={{
            padding: " 0px 20px",
            marginLeft: "20px",
            height: "50px",
          }}
          dropdownStyle={{ textAlign: "left", width: "240px" }}
          countryCodeEditable={false}
          placeholder="Your phone number"
          value={num}
          onChange={(e) => setNum(e)}
        />
        <div id="sign-in-button"></div>
        <button className="continue" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
};

export default NumberInput;
