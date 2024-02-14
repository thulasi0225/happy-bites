var express = require("express");
var router = express.Router();

const contact = require("../models/Contact");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/add-message", async (req, res) => {
  try {
    const data = await contact.create(req.body);

    res.send({
      message: "details added successfully!",
      status: true,
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.send({ message: "Error in conenction", status: false, error: err });
  }
});

module.exports = router;
