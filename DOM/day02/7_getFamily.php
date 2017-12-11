<?php
header("Content-Type:application/json");
require_once("./init.php");
$sql="SELECT fid,fname FROM xz_laptop_family";

echo json_encode(sql_execute($sql));