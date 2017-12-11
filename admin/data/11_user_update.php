<?php
require("00_init.php");
@$uid=$_REQUEST["uid"];
@$old_pwd=$_REQUEST["old_pwd"];
@$new_pwd=$_REQUEST["new_pwd"];
$sql_select="select * from xz_user where uid=$uid and upwd='$old_pwd'";
$result=mysqli_query($conn,$sql_select);
$row=mysqli_fetch_assoc($result);
var_dump($row);
if($row==null){
	die('{"code":-1,"msg":"你输入的密码不正确,请检查后重新输入"}');
}
$sql_update="update xz_user set upwd='$new_pwd' where uid=$uid";
$result=mysqli_query($conn,$sql_update);
$rowCount=mysqli_affected_rows($result);
var_dump($rowCount);
if($result&&$rowCount>0){
	echo ('{"code":1,"msg":"更新密码成功"}');
}else{
	echo ('{"code":-2,"msg":"更新失败"}');
}