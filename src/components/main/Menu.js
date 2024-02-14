import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../utilities/Navbar";
import Card from "../utilities/Card";
import cart from "../../img/cart.png";

import "../css/Menu.css";
import Footer from "../utilities/Footer";

// import "../css/mobile/mobile.css";

const Menu = () => {
  const [foods, setFoods] = useState([]);

  const [count, setCount] = useState(0);
  const [item, setItem] = useState([]);
  const [amount, setAmount] = useState(0);

  const [navState, setNavState] = useState(false);

  const [orderedFood, setOrderedFood] = useState([]);

  const navigate = useNavigate();

  // const [foodCount, setFoodCount] = useState({});
  let foodCount = {};

  // const prevFoodCount = useRef(foodCount);

  // add food to the selected item
  const addFood = (food) => {
    setItem([...item, food]);
    setCount(count + 1);
    setAmount(amount + food.price);
  };

  // remove food from the selected item
  const removeFood = (food) => {
    setCount(count - 1);
    setAmount(amount - food.price);
    if (item.length !== 0) {
      setItem((prevState) => {
        const newItem = [...prevState].filter((item) => item._id !== food._id);
        const dishItem = [...prevState].filter((item) => item._id === food._id);
        dishItem.pop();
        return newItem.concat(...dishItem);
      });
    } else {
      return;
    }
  };

  // pushing the selected foods to the DB
  const checkout = () => {
    axios
      .post("https://happy-bites.onrender.com/foods/add-order", {
        item: orderedFood,
        amount: amount,
        count: count,
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));

    navigate("/order");
  };

  useEffect(() => {
    axios
      .get("https://happy-bites.onrender.com/foods")
      .then((resp) => setFoods(resp.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const dummyArr = [];
    for (const [key, value] of Object.entries(foodCount)) {
      dummyArr.push([JSON.parse(key), value]);
    }
    setOrderedFood(dummyArr);
  }, [count]);

  const toggleNav = (nav) => {
    setNavState(nav);
  };

  return (
    <>
      <div>
        <header className="showcase-main">
          <Navbar cart={true} toggleNav={toggleNav} />
          <div className="content">
            <h1
              className="content-heading"
              style={navState ? { display: "none" } : null}
            >
              <span id="content-text">Grab a food</span> from our Menu
            </h1>
          </div>
        </header>
        <div className="menu-container">
          <div className="food-card-container" id="mobile-food-card-container">
            {foods.map((food, key) => {
              return (
                <Card
                  food={food}
                  key={key}
                  addFood={addFood}
                  removeFood={removeFood}
                />
              );
            })}
          </div>
          <div className="cart-container">
            <div
              className="cart-card"
              style={
                item.length !== 0
                  ? { border: "2px solid #f7c08a", borderRadius: "5px" }
                  : null
              }
            >
              {item.length === 0 ? (
                <>
                  <p className="cart-title">Cart Empty</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={cart} alt="cart" className="cart-img"></img>
                  </div>
                  <p className="cart-text">
                    Good food is always cooking! Go ahead, order some yummy
                    items from the menu.
                  </p>
                </>
              ) : (
                <>
                  <p className="cart-title">Cart</p>
                  <p>
                    {count} {count > 1 ? "ITEMS" : "ITEM"}
                  </p>
                  {item.forEach((food) => {
                    const key = JSON.stringify(food);
                    foodCount[key] = (foodCount[key] || 0) + 1;
                  })}
                  {orderedFood.length > 0 &&
                    orderedFood.map((food, key) => {
                      return (
                        <p className="cart-item" key={key}>
                          {food[0].name} ({food[1]})
                        </p>
                      );
                    })}
                  <p>Subtotal : &#8377; {amount}</p>
                  <button className="btn btn-add" onClick={checkout}>
                    CHECKOUT &nbsp;
                    <i className="fa-solid fa-circle-chevron-right"></i>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        {item.length === 0 ? (
          <></>
        ) : (
          <>
            <div className="mobile-below-cart">
              <div className="mobile-cart-main">
                <h2>
                  <i
                    className="fas fa-arrow-circle-right"
                    style={{ marginRight: "10px" }}
                  ></i>
                  YOUR ORDER&nbsp;<span>({count})</span>
                </h2>
              </div>
              <div className="mobile-cart-right">
                <h3 className="mobile-cart-total">
                  Subtotal: <span>&#8377;</span>
                  {amount}
                </h3>
                <button className="btn btn-add cart-btn" onClick={checkout}>
                  CHECKOUT &nbsp;
                  <i className="fa-solid fa-circle-chevron-right"></i>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Menu;
