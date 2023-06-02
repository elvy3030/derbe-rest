const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.location = require("./location.model");

db.ROLES = ["user", "admin", "moderator", "FieldExecutive"];

module.exports = db;