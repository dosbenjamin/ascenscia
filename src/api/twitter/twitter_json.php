<?php
require_once('twitter_query.php');
require_once('../db/db.php');

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

$count = count($string['statuses']);
$request = $connexion -> prepare('UPDATE tweets SET count = :count WHERE ID = 1');
$request -> bindValue(':count', $count);
$request -> execute();

echo json_encode($string);