<?php
	$upwd=$_REQUEST["upwd"];
	$email=$_REQUEST["email"];
	$phone=$_REQUEST["phone"];
	$user_name=$_REQUEST["user_name"];
	$gender=$_REQUEST["gender"];
	$uid=$_REQUEST["uid"];
	require("00-init.php");
	$sql="update xz_user set"; 
	$sql.="upwd='$upwd',";
	$sql.="email='$email',";
	$sql.="phone='$phone',";
	$sql.="user_name='$user_name',";
	$sql.="gender=$gender ";
	$sql.="where uid=$uid";
	$result=mysqli_query($conn,$sql);
	if($result==true){
		#echo "alert('成功')";
		$msg="<script>";
		$msg.="alert('成功');";
		$msg.="location.href='00-homework.html';";
		$msg.="</script>";
		echo $msg;
	}else{
		echo "失败";
	}
?>