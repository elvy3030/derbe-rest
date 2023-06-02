const express = require("express");
const cors = require("cors");
const app =express();
const dbConfig= require("./app/config/db.config")

var corsOptions ={
    origin :"http://localhost:8081"
}

app.use(cors());
//app.use(cors(corsOptions));

// parse requests of content-type - application/json

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));

const db = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req,res)=>{
    res.json({message: "Derbe Backend server Application"})
});


// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/location.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080 ;
app.listen(PORT,()=>{
    console.log (`Derbe Server is running on port ${PORT}.`);
});


function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
            new Role({
            name: "user"
            }).save(err => {
            if (err) {
                console.log("error", err);
            }
    
            console.log("added 'user' to roles collection");
            });
    
            new Role({
            name: "moderator"
            }).save(err => {
            if (err) {
                console.log("error", err);
            }
    
            console.log("added 'moderator' to roles collection");
            });
    
            new Role({
            name: "admin"
            }).save(err => {
            if (err) {
                console.log("error", err);
            }
    
            console.log("added 'admin' to roles collection");
            });

            // derbe roles

            new Role({
              name: "SystemAdministrator"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'SystemAdministrator' to roles collection");
            });

            new Role({
              name: "CompanyAdministrator"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'CompanyAdministrator' to roles collection");
            });

            new Role({
              name: "CompanyOwnerPartner"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'CompanyOwnerPartner' to roles collection");
            });

            new Role({
              name: "CountryOperationsHead"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'CountryOperationsHead' to roles collection");
            });

            new Role({
              name: "ZoneOperHead"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'ZoneOperHead' to roles collection");
            });

            new Role({
              name: "StateOperHead"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'StateOperHead' to roles collection");
            });

            new Role({
              name: "RegionalOperHead"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'RegionalOperHead' to roles collection");
            });

            new Role({
              name: "DistrictHeadBranchHead"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'DistrictHeadBranchHead' to roles collection");
            });

            new Role({
              name: "ProcessHead"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'ProcessHead' to roles collection");
            });

            new Role({
              name: "ProcessManager"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'ProcessManager' to roles collection");
            });

            new Role({
              name: "ITHead"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'ITHead' to roles collection");
            });

            new Role({
              name: "FinanceManager"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'FinanceManager' to roles collection");
            });

            new Role({
              name: "HRManager"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'HRManager' to roles collection");
            });

            new Role({
              name: "CountryAdministrator"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'CountryAdministrator' to roles collection");
            });

            new Role({
              name: "MISManager"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'MISManager' to roles collection");
            });

            new Role({
              name: "ITManager"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'ITManager' to roles collection");
            });

            new Role({
              name: "StateAdministrator"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'StateAdministrator' to roles collection");
            });

            new Role({
              name: "MISExecutive"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'MISExecutive' to roles collection");
            });

            new Role({
              name: "AssertsManagerHWAdministrator"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'AssertsManagerHWAdministrator' to roles collection");
            });

            new Role({
              name: "TeamLeaderFieldExecutives"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'TeamLeaderFieldExecutives' to roles collection");
            });
            
            new Role({
              name: "FieldExecutive"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'FieldExecutive' to roles collection");
            });

            new Role({
              name: "TeamLeaderPhoneBankers"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'TeamLeaderPhoneBankers' to roles collection");
            });

            new Role({
              name: "PhoneBanker"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'PhoneBanker' to roles collection");
            });

            new Role({
              name: "TeamLeaderTracers"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'TeamLeaderTracers' to roles collection");
            });

            new Role({
              name: "Tracers"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'Tracers' to roles collection");
            });
            
            new Role({
              name: "AccountsHead"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'AccountsHead' to roles collection");
            });

            new Role({
              name: "AccountsExecutive"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'AccountsExecutive' to roles collection");
            });

            new Role({
              name: "AccountsClerk"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'AccountsClerk' to roles collection");
            });

            new Role({
              name: "TrainingHead"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'TrainingHead' to roles collection");
            });

            new Role({
              name: "HRExecutive"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'HRExecutive' to roles collection");
            });

            new Role({
              name: "TraineeTeamLeader"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'TraineeTeamLeader' to roles collection");
            });
            
            new Role({
              name: "Trainer"
              }).save(err => {
              if (err) {
                  console.log("error", err);
              }
            
              console.log("added 'Trainer' to roles collection");
            });

        }
    });
}







