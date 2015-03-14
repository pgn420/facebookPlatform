<?php

echo $_GET['fbid'];

$url = 'https://graph.facebook.com/' . $_GET['fbid'] . '/notifications';
$data = array(
	'template' => 'You have people waiting to play with you, play now!',
	'access_token' => $_GET['access_token']);

// use key 'http' even if you send the request to https://...
$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data),
    ),
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

var_dump($result);

?>
