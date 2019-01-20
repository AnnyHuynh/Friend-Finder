//Dependencies/////

var path = require("path");

module.exports = function(app) {
  // Routes ////
  
  //Get route to '/survey' which diesplays survey.html.
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/survey.html"));
  });

 // Default GET route, catch-all that leads to home.html
 app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../app/public/home.html"));
});

// Default GET route, catch-all that leads to home.html
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../app/public/home.html"));
  });
};
