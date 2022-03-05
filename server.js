// define express
var express = require("express");

var app = express();
// define the dir name for the files
app.use(express.static(__dirname));








// set the port for local tests
var server = app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000")
})
