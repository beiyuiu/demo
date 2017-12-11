<?php
	#1、连接数据库
	require("00-init.php");
	#2、接收前端传递的数据
	$uname=$_REQUEST["uname"];
	$upwd=$_REQUEST["upwd"];
	#3、到数据库验证用户名与密码
	$sql = "select * from xz_user where uname='$uname' and upwd='$upwd'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	if($row==null){
		echo "用户名或密码不正确";
	}else{
		echo "登陆成功";
	}
?>