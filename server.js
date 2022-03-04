var express = require("express");

var app = express();








// set the port for local tests
var server = app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000")
})
