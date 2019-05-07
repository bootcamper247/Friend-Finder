// LOAD DATA
// This data source hold array of information of potential friends.

var friendsData = require("../data/friends");


// ROUTING
//passing app arg because app is defined as an instance of express() in server.js

module.exports = function (app) {
  // when the user clicks the api/friends link on the page
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)

  app.get("/api/friends", function (req, res) {
    return res.json(friendsData);
  });


  // When the server recieves a post request
  app.post("/api/match", function (req, res) {
    // req.body is equal to the JSON object sent from the HTML submit as a POST request. The body parsing middleware parses it
    // The apply code logic and the server can send the rsponse via res.send() which goes to the callback of the matching post request in the HTML
    let tempArr = [];
    let match = { name: "", photo: "", score: 1000 };

    tempArr.push(req.body);

    for (var i = 0; i < friendsData.length; i++) {
      let tempScore = 0;
      let tempObj = {};

      //compare answers and get and get least diff
      for (var j = 0; j < friendsData[i].scores.length; j++) {
        tempScore += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(tempArr[0].scores[j]));
      }
      tempObj = { name: friendsData[i].name, score: tempScore, photo: friendsData[i].photo };
      if (parseInt(tempObj.score) < parseInt(match.score)){
        match.name = tempObj.name;
        match.score = tempObj.score;
        match.photo = tempObj.photo;
      }
    }
    //console.log(match);

    //console.log(friendsData);
    res.send(match);
  });
  
};
