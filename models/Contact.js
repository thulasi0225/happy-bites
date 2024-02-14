const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});

const contact = mongoose.model("contact", ContactSchema);

module.exports = contact;
