var express = require("express");
var router = express.Router();
const Razorpay = require("razorpay");
const env = require("dotenv").config();

const food = require("../models/Food");
const order = require("../models/Order");

// creating obj with key and secret
var instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECERT_KEY,
});

// to get all foods
router.get("/", async (req, res) => {
  try {
    const data = await food.find();

    res.send({ message: "Success!", status: true, data: data });
  } catch (err) {
    // console.log(err);
    res.send({ message: "Error in connection", status: false, error: err });
  }
});

// add food
router.post("/create-food", async (req, res) => {
  try {
    const data = await food.create(req.body);

    res.send({ message: "Food added successfully!", status: true, data: data });
  } catch (err) {
    // console.log(err);
    res.send({ message: "Error in connection", status: false, error: err });
  }
});

// fetch orders
router.get("/get-orders", async (req, res) => {
  try {
    const data = await order.find();
    res.send({
      message: "Order fetched successfully",
      status: true,
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.send({ message: "Error in connection", status: false, error: err });
  }
});

// add order (selected food)
router.post("/add-order", async (req, res) => {
  try {
    const orderContent = await order.find();
    if (!orderContent.length) {
      const data = await order.create(req.body);

      res.send({
        message: "Order placed successfully",
        status: true,
        data: data,
      });
    } else {
      await order.deleteMany({});

      const data = await order.create(req.body);
      res.send({
        message: "Order placed successfully",
        status: true,
        data: data,
      });
    }
  } catch (err) {
    console.log(err);
    res.send({ message: "Error in connection", status: false, error: err });
  }
});

// orderId to verify the payment
router.post("/create-orderId", async (req, res) => {
  let options = {
    amount: req.body.amount,
    currency: "INR",
    receipt: "rcpt", // random string
  };

  instance.orders.create(options, (err, order) => {
    if (err) console.log(err);
    res.send({ data: order });
  });
});

module.exports = router;
