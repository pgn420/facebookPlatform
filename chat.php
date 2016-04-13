<?php
$verify_token = "mychatbot";

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET' && $_GET['hub_verify_token'] === $verify_token) {
  echo $_GET['hub_challenge'];
}

app.post('/webhook/', function (req, res) {
  messaging_events = req.body.entry[0].messaging;
  for (i = 0; i < messaging_events.length; i++) {
    event = req.body.entry[0].messaging[i];
    sender = event.sender.id;
    if (event.message && event.message.text) {
      text = event.message.text;
      
      sendTextMessage(sender, "Text received, echo: "+ text.substring(0, 200));
    }
  }
  res.sendStatus(200);
});

var token = "EAAKrzZA0LYLYBAOkwRSdukpkuX1fLHzbuGmjhHncz2WAVdUqXFVoJ1cR0UaY0Y1EpZC5eeOnb4RgjHosawZCqANXwEQRDvqsjJjFISV58zGGOGfRmSM6jmiqJlW1xUrY5zCcEe9fzwIWBCimYkp4EyXVqHZBWO23d7OklNdZBFwZDZD";

function sendTextMessage(sender, text) {
  messageData = {
    text:text
  }
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token:token},
    method: 'POST',
    json: {
      recipient: {id:sender},
      message: messageData,
    }
  }, function(error, response, body) {
    if (error) {
      console.log('Error sending message: ', error);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
    }
  });
}

?>