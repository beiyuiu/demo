<?php
header("Content-Type:application/json");
require_once("../init.php");
$output=[];
@$lid=$_REQUEST["lid"];
if($lid){
	$sql="SELECT * FROM xz_laptop WHERE lid=$lid";
	$output["laptop"]=sql_execute($sql)[0];
	$sql="SELECT * FROM xz_laptop_pic WHERE laptop_id=$lid";
	$output["laptop"]["pics"]=sql_execute($sql);
	$fid=$output["laptop"]["family_id"];
	$sql="SELECT fid,fname FROM xz_laptop_family WHERE fid=$fid;";
	$output["family"]=sql_execute($sql)[0];
	$sql="SELECT lid,spec FROM xz_laptop WHERE family_id=$fid;";
	$output["family"]["laptop_list"]=sql_execute($sql);
	echo json_encode($output);
}else{
	echo "[]";
}