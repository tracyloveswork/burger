var express = require("express");

var router = express.Router();

// Import the model (orm.js) to use its database functions.
var orm = require("../config/orm.js");



// Export routes for server.js to use.
module.exports = router;