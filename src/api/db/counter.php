<?php
require_once('db.php');
require_once('../twitter/twitter_query.php');
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

function updateCount ($connexion) {
  $request = $connexion -> prepare('SELECT COUNT(*) FROM tweets');
  $request -> execute();
  $tweets = $request -> fetchAll();
  return (int)$tweets[0][0];
}

function addToDB ($connexion, $id) {
  $request = $connexion -> prepare('INSERT INTO tweets (tweet_id) VALUES (?)');
  $request -> execute([$id]);
}

$dbCount = updateCount($connexion);
$apiArray = $string['statuses'];
$apiCount = count($apiArray);

while ($dbCount != $apiCount || $apiArray == 1) {
  $rCount = $apiCount - $dbCount - 1;
  $id = $apiArray[$rCount]['id'];
  addToDB($connexion, $id);
  $dbCount++;
}

$dbCount = updateCount($connexion);

$jsonArray = [
  'count' => $dbCount,
  // 'last_user' => '@'.$apiArray[0]['user']['screen_name']
];
echo json_encode($jsonArray);