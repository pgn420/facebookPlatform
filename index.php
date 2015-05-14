<!DOCTYPE html>
<html>
<head>
  <title>Platform Test</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
  <link rel="stylesheet" href="/css/style.css">
  <script src="//code.jquery.com/jquery-1.9.1.js"></script>
  <script src="//code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
</head>
<body>
  <div id="fb-root"></div>
  <script src="//www.facebook.com/assets.php/en_US/sdk/debug.js"></script>
  <div id="stage"></div>
  <div class="fb-like" data-href="http://apps.facebook.com/platfom" data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div>
  <script src="scripts/entryPoint.js"></script>
  <script src="scripts/menu.js"></script>
  <script src="scripts/share.js"></script>
  <script src="scripts/payment.js"></script>
  <script src="scripts/request.js"></script>
  <script src="scripts/appevent.js"></script>
  <script src="scripts/achievement.js"></script>

  <script>
    // Initialize the JS SDK
    FB.init({
      appId: '751849544835254',
      frictionlessRequests: true,
      status: true,
      xfbml: true,
      version: 'v2.2' // use version 2.0
    });

    FB.login(function(response) {
      if (response.authResponse) {        
        init();
      } else {
        init();
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {
      scope: 'publish_actions, email, user_friends', 
      return_scopes: true
    });

    </script>
  </body>
</html>