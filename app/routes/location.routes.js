const controller = require("../controllers/location.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.post("/api/derbe/addlocation", controller.addLocation);
    // app.get("/api/derbe/getlocation", controller.getLocation);
    // app.get("/api/derbe/getlocationbydate",controller.getLocationByDate);
    // app.get("/api/derbe/getlastlocation", controller.getLastLocation);
   
   
  };

  // module.exports = function(app) {
  //   app.use(function(req, res, next) {
  //    res.send ("test");
    
  //   });
  //   app.post("/api/derbe/addlocation", controller.addLocation);
  //   // app.get("/api/derbe/getlocation", controller.getLocation);
  //   // app.get("/api/derbe/getlocationbydate",controller.getLocationByDate);
  //   // app.get("/api/derbe/getlastlocation", controller.getLastLocation);
   
   
  // };