import { useCallback, useState, useEffect } from "react";
import useRazorpay from "react-razorpay";
import logo from "./logo.png";
// import SuccessAlert from "./SuccessAlert";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Payment({ price, label }) {
  const Razorpay = useRazorpay();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [totalCartValue, setTotalCartValue] = useState(0);
  const cart = useSelector((store) => store.CartReducer.cart);

  const CountCartValue = () => {
    let Sum = 0;
    cart.forEach((el) => {
      Sum += +el.price;
    });
    console.log(cart);
    setTotalCartValue(Sum);
  };
  useEffect(() => {
    CountCartValue();
  }, [cart]);

  // useEffect(() => {
  //   // setTimeout(() => {
  //   //   handlePayment();
  //   // }, 100);

  //   console.log("somehting");
  // }, []);
  console.log("price", price);

  const handlePayment = useCallback(async () => {
    const order = {
      //   amount: 500,
      currency: "INR",
      receipt: "qwsaq1",
    };

    const options = {
      key: "rzp_test_qho4K1vu3eyRqY",
      amount: price * 100 || 1619*100,
      currency: "INR",
      name: "Urban Service",
      description: "Test Transaction",
      image: logo,
      order_id: order.id,
      handler: (res) => {
        swal({
          title: "Payment Successful",
          text: "Your order has been placed!",
          icon: "success",
        });
        navigate("/");
      },
      prefill: {
        name: "John Doe",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#0D0D0D",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);
  console.log(success);
  return (
    <div className="App">
      <button
        onClick={() => {
          handlePayment();
        }}
      >
        Proceed to Payment
      </button>
    </div>
  );
}
