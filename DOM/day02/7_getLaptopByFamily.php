<?php
header("Content-Type:application/json");
require_once("./init.php");
@$fid=$_REQUEST["fid"];
if($fid){
	$sql="SELECT lid,title FROM xz_laptop WHERE family_id=$fid";
	echo json_encode(sql_execute($sql));
}else{
	echo json_encode([]);
}