// DEPENDENCIES

var express = require("express");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// process.env.PORT lets the port be set by Heroku
// Sets an initial port.... for our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// These routes(files) give our server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Sets up the server as listener(i.e. starts the server)
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
