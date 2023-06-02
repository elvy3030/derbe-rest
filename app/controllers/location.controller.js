const config = require("../config/auth.config");
const db = require("../models");
const Location = db.location;

exports.addLocation = (req, res) => {
    const location = new Location({
        username: req.body.username,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        altitude:req.body.altitude,
        speed:req.body.speed,
        acurrecy:req.body.acurrecy,
        timestamps:req.body.timestamps,
        
      });
      console.log("Location Data");
      console.log(location);

      location.save((err, location) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });

      res.status(200).send({
        id: location._id,
        username: location.username,
        longitude: location.longitude,
        latitude: location.latitude,
        altitude:location.altitude,
        speed:location.speed,
        acurrecy:location.acurrecy,
        timestamps:location.timestamps,
      });
}