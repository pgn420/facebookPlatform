<?php
$verify_token = "mychatbot";

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET' && $_GET['hub_verify_token'] === $verify_token) {
  echo $_GET['hub_challenge'];
}

echo $_GET['hub_challenge'];

?>