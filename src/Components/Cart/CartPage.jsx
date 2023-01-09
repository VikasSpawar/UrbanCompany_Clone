import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../Redux/Cart/action";
import "./cartPage.css";
import Payment from "./Payment";

const CartPage = () => {
  const cart = useSelector((store) => store.CartReducer.cart);
  // console.log(cart);
  const dispatch = useDispatch();
  console.log(cart);

  // const totalCartValue = cart.reduce((ac, cv) => {
  // return Number(ac.price) + Number(cv.price);
  // });
  // console.log(totalCartValue);
  // const totalBill = totalCartValue + 158;
  // useEffect(() => {
  //   dispatch(getCartData());
  // }, []);

  const [totalCartValue, setTotalCartValue] = useState(0);

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

  return (
    <div className="body">
      <div className="heading">
        <h1>Summary</h1>
      </div>
      <div className="container">
        <div>
          <div className="para1">
            <p>You're saving total ₹899 on this order!</p>
            <p style={{ color: "#6E42E5" }}>Including ₹150 with plus</p>
          </div>
          <div style={{ marginTop: "34px" }}>
            {cart &&
              cart?.map((item) => {
                return (
                  <div key={item.id} style={{ marginBottom: "30px" }}>
                    <div className="title1">
                      <div>
                        <p>{item.title}</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "20px",
                        }}
                      >
                        <div className="price1">
                          <button style={{ marginRight: "15px" }}>-</button>
                          <p>1</p>
                          <button style={{ marginLeft: "15px" }}>+</button>
                        </div>
                        <div>
                          <p>₹{item.price}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      {item &&
                        item.para.map((data, index) => {
                          return (
                            <ul key={index} className="ul">
                              <li>{data.para}</li>
                            </ul>
                          );
                        })}
                    </div>
                    <button className="edit-btn">Edit Package</button>
                  </div>
                );
              })}
          </div>
          <div className="last">
            <div>
              <h2>Plus Membership</h2>
              <p style={{ fontSize: "14px", color: "grey", marginTop: "5px" }}>
                12 months
              </p>
            </div>
            <div className="price2">
              <div>
                <button className="rmv-btn">Remove</button>
              </div>
              <div>
                <p>₹299</p>
                <p style={{ textDecoration: "line-through" }}>₹999</p>
              </div>
            </div>
          </div>
          <div className="border"></div>
        </div>
        <div className="right-container">
          <div className="title2">
            <h1>Payment Summary</h1>
          </div>
          <div>
            <div className="same">
              <p>Item total</p>
              <p>₹{totalCartValue}</p>
            </div>
            <div className="same">
              <p>Item discount</p>
              <p style={{ color: "teal" }}>-₹50</p>
            </div>
            <div className="same">
              <p>Membership discount</p>
              <p style={{ color: "teal" }}>-₹150</p>
            </div>
            <div className="same">
              <p id="tax">Taxes and Fee</p>
              <p>₹59</p>
            </div>
            <div className="same">
              <p>Plus Membership</p>
              <p
                style={{ textDecoration: "line-through", marginLeft: "220px" }}
              >
                ₹999
              </p>
              <p>₹299</p>
            </div>
          </div>
          <div className="total-bill">
            <div
              className="same"
              style={{ fontWeight: "bold", marginBottom: "15px" }}
            >
              <h2>Total</h2>
              <p>₹{totalCartValue}</p>
            </div>
            <div className="yay">Yay! You saved ₹899 on final bill</div>
          </div>
          <div>
            <button className="pay-btn">
              <Payment price={totalCartValue} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
