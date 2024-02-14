import { useState } from "react";
import { Link } from "react-router-dom";

import "../css/Navbar.css";
import "../css/utilities.css";

const Navbar = (props) => {
  const [isActive, setIsActive] = useState(false);

  const changeState = () => {
    props.toggleNav(isActive);
  };

  return (
    <>
      <div className="navbar-container">
        <div
          id={isActive ? "mobile-navbar" : "navbar"}
          className="navbar"
          style={props.cart ? { position: "static" } : null}
        >
          <div className="menu-button">
            <i
              className="fa-solid fa-bars"
              onClick={() => {
                setIsActive(!isActive);
                if (props.cart) changeState();
              }}
            ></i>
          </div>
          <h1 className="logo">
            <span className="text-white">
              <i className="fa-solid fa-burger logo-color"></i> &nbsp;Happy
              Bites
            </span>
          </h1>

          <nav className={isActive ? "mobile-nav" : "display-nav"}>
            <ul>
              <li>
                <Link className="route-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="route-link" to="/menu">
                  Menu
                </Link>
              </li>
              <li>
                <Link className="route-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="route-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
