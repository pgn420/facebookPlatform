var gStage;
var gAccessToken;
var gPlayerFBID;

window.onload = function() {
  setTimeout(function() {
    window.scrollTo(0, 1);
  }, 500);
};

function init() {
  FB.AppEvents.activateApp();

  console.log('Welcome!  Fetching your information.... ');

  FB.getLoginStatus(function(response) {
  	FB.api('/me', function(response) {
      console.log('Profile Name, ' + response.name + '.');
    });

    if (response.status === 'connected') {
      console.log('signedRequest ' + response.authResponse.authResponse);
      console.log('Access Token: ' + response.authResponse.accessToken);
      gAccessToken = response.authResponse.accessToken;
      gPlayerFBID = response.authResponse.userID;
      console.log("player id " + gPlayerFBID);
      buildProfile(gPlayerFBID);
   }
   createMenu();
 });
}
