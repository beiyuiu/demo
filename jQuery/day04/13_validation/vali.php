<?php
header("Content-Type:text/plain");
require_once("../init.php");
@$uname=$_REQUEST["uname"];
if($uname){
	$sql="select * from xz_user where uname='$uname'";
	$result=sql_execute($sql);
	if(count($result))
		echo "fasle";
	else
		echo "true";
}else{
	@$emali=$_REQUEST["email"];
	$sql="select * from xz_user where email='$email'";
	$result=sql_execute($sql);
	if(count($result))
		echo "fasle";
	else
		echo "true";

}