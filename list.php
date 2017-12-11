<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json;charset=utf-8");
$rows = [];
$rows[] = ["name"=>"tom"]; 
$rows[] = ["name"=>"jerry"]; 
$rows[] = ["name"=>"kk"]; 
$rows[] = ["name"=>"james"];
echo json_encode($rows);