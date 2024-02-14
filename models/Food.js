const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  rating: {
    type: Number,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  isVeg: {
    type: Boolean,
  },
});

const food = mongoose.model("food", FoodSchema);

module.exports = food;
