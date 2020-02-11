<?php
require_once 'db.php';
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

$request = $connexion->prepare('SELECT * FROM tweets');
$request->execute();
$tweets = $request->fetchAll();
$count = (int) $tweets[0]['count'];

$jsonArray = ['count' => $count,];

echo json_encode($jsonArray);
