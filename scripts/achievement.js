var ACHIEVEMENT1 = 0;
var ACHIEVEMENT2 = 1;
var ACHIEVEMENT3 = 2;

var achievementURLs = new Array();
achievementURLs[0] = "http://platformtest.herokuapp.com/achievements/achievement1.html";
achievementURLs[1] = "http://platformtest.herokuapp.com/achievements/achievement2.html";
achievementURLs[2] = "http://platformtest.herokuapp.com/achievements/achievement3.html";

function createAchievement() {
  var achievementContainer = createSection('Achievement', 'achievement_container');
  createButton(achievementContainer, 'achievement 1', 'getAchievement1');
  createButton(achievementContainer, 'achievement 2', 'getAchievement2');
  createButton(achievementContainer, 'achievement 3', 'getAchievement3');
}

function getAchievement1() {
  sendAchievement(ACHIEVEMENT1);
}

function getAchievement2() {
  sendAchievement(ACHIEVEMENT2);
}

function getAchievement3() {
  sendAchievement(ACHIEVEMENT3);
}

function sendAchievement(achievementIdx) {
  //check whether achievement is already
  FB.api('/me/achievements/', 'get', {
    access_token : gAccessToken
  }, function(response) {

    for (var i = 0; i < response.data.length; ++i) {
      if (response.data[i].data.achievement.url == achievementURLs[achievementIdx]) {
        console.log(response.data[i].data.achievement.title + "was received.");
        return;
      }
    }

    FB.api('/me/achievements/', 'post', {
      access_token : gAccessToken,
      achievement : achievementURLs[achievementIdx]
    }, function(response) {
      console.log(response);
    });

  });
}
