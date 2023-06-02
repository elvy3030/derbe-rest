const mongoose = require("mongoose");

const location = mongoose.model(
  "Location",
  new mongoose.Schema({
    username: String,
    longitude: String,
    latitude: String,
    altitude:String,
    speed:String,
    acurrecy:String,
    timestamps:String,
  })
);

module.exports = location;



