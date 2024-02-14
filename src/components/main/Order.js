import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../utilities/Navbar";
import order from "../../img/order.png";

import "../css/Order.css";
import Footer from "../utilities/Footer";

import "../css/mobile/mobile.css";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

// main component
const Order = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [amount, setAmount] = useState(0);
  const [count, setCount] = useState(0);

  let tax = (amount * 5) / 100;
  let totalAmount = amount + tax;

  const toggleRazorpay = async (totalPayment) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert(
        "Razorpay SDK failed to load. Please check your network connection!"
      );
      return;
    }

    axios
      .post("https://happy-bites.onrender.com/foods/create-orderId", {
        amount: totalPayment * 100, // 100 paise = 1 rupee
      })
      .then((resp) => {
        console.log(resp);
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY,
          amount: parseInt(resp.data.data.amount * 100),
          currency: resp.data.data.currency,
          name: "Happy Bites",
          description: "Thanks for ordering food, you are almost there!",
          image: order,
          order_id: resp.data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          handler: function (response) {
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);

            alert("Payment Successfull!");
            navigate("/");
          },
          prefill: {
            name: "Santhosh",
            email: "santhosh8857@example.com",
            contact: "987867124",
          },
        };
        var payment = new window.Razorpay(options);
        payment.open();
      });
  };

  useEffect(() => {
    axios
      .get("https://happy-bites.onrender.com/foods/get-orders")
      .then((resp) => {
        setOrders(resp.data.data[0].item);
        setAmount(resp.data.data[0].amount);
        setCount(resp.data.data[0].count);
      })
      .catch((err) => console.log(err));
  }, [orders]);

  return (
    <>
      <div>
        <header className="showcase-main">
          <Navbar />
          <div className="content">
            <h1 className="content-heading">
              You are Almost Near <br /> to your{" "}
              <span id="content-text">FOOD!</span>
            </h1>
          </div>
        </header>
        <div className="main-order-container">
          <div className="order-container" id="mobile-order-container">
            <h2 className="order">
              {/* <span>
                <img src={order} alt="order" style={{ width: "8%" }} />
              </span> */}
              Your Order
            </h2>
            <p className="count">
              {count} {count > 1 ? "ITEMS" : "ITEM"}
            </p>
            {orders.map((food, key) => {
              return (
                <div key={key} className="order-food-card">
                  <img src={food[0].img} alt={food[0].name} />
                  <div>
                    <i
                      className="fa-solid fa-circle-stop icon"
                      style={
                        food[0].isVeg ? { color: "green" } : { color: "red" }
                      }
                    ></i>
                    <span className="content-heading">
                      {food[0].name} &nbsp;({food[1]})
                    </span>
                    <div className="food-content">
                      <p>
                        <i className="fa-solid fa-utensils"></i> &nbsp;
                        {food[0].category}
                      </p>
                      {/* <p>{food[0].description}</p> */}
                      <p className="food-price">
                        &#8377; {food[0].price * food[1]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div>
              <p className="content-heading">Bill Details</p>
              <div className="bill-payment">
                <p>Item Total</p>
                <p>&#8377; {amount.toFixed(1)}</p>
              </div>
              <div className="bill-payment">
                <p>Taxes and Charges</p>
                <p>&#8377; {tax}</p>
              </div>
              <hr />
              <div className="bill-payment">
                <p>To Pay</p>
                <p>&#8377; {totalAmount}</p>
              </div>
            </div>
            <div>
              <button
                className="btn btn-remove"
                onClick={() => {
                  navigate("/menu");
                }}
              >
                re-order &nbsp;<i className="fa-solid fa-trash-can"></i>
              </button>
              <button
                className="btn btn-add"
                onClick={() => {
                  toggleRazorpay(totalAmount);
                }}
                style={{ marginLeft: "10px" }}
              >
                Pay &nbsp;<i className="fa-solid fa-circle-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Order;
