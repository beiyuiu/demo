<?php
header("Content-Type:application/json;charset=UTF-8");
$rows=[];
$rows[]=["label"=>"HTML","value"=>4];
$rows[]=["label"=>"CSS","value"=>5];
$rows[]=["label"=>"JS","value"=>9];
$rows[]=["label"=>"DOM","value"=>8];
$rows[]=["label"=>"AJAX","value"=>7];
$rows[]=["label"=>"H5L","value"=>6];
echo json_encode($rows);