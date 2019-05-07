// DEPENDENCIES
// path package is included to get the correct file path for our html
var path = require("path");

// ROUTING

module.exports = function(app) {

  // HTML GET Requests - user is shown an HTML page of content

  //survey.html gets loaded
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home.html
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
