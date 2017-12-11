<?php
header("Content-Type:appication/json");
require_once("./init.php");
$sql="SELECT uid,uname,email,phone FROM xz_user";
echo json_encode(sql_execute($sql));