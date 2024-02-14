import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

import App from "./App";
import Menu from "./components/main/Menu";
import About from "./components/main/About";
import Contact from "./components/main/Contact";
import Order from "./components/main/Order";

const routing = (
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/menu" element={<Menu />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/order" element={<Order />} />
    </Routes>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
