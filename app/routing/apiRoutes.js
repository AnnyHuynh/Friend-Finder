// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    
    var newFriend = req.body;
    var newFriendScore = req.body.scores; 
    var lastDiff = 41;
    var friendNum = 0;  

    for (var i = 0; i < friendsData.length; i++){

      var totalDiff = 0;
      for (var J = 0; j < newFriendScore.length; j++){
        if (newFriendScore[j] > friendsData[i].scores[j]){
          var diffScore = newFriendScore[j] - friendsData[i].scores[j];
        }else if (newFriendScore[j] < friendsData[i].scores[j]){
          var diffScore = friendsData[i].scores[j] - newFriendScore[j];
        }
        totalDiff += diffScore;
      }
      if (totalDiff < lastDiff){
        lastDiff = totalDiff;
        friendNum = i;
      }
    }

    console.log("you're best matched friend is: " + friendsData(friendNum).name);
    console.log("this is a link to their photo: "+ friendsData[friendNum].photo);
    console.log("The total differece is : " + lastDiff);

      friendsData.push(newFriend);
      
      res.send(friendsData[friendNum]);
  
  });

};

 

  