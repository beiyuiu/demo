<?php
	//添加响应消息头
	header("Content-Type:application/json");
	//引用00-init.php
	require("00-init.php");
	//构建SQL语句
	$sql="select * from xz_user";
	//导数据库中查询结果
	$result=mysqli_query($conn,$sql);
	//将结果转换为关联数组
	$array=mysqli_fetch_all($result,MYSQLI_ASSOC);
	//将关联数组转换为JSON格式字符串并响应
	echo json_encode($array);
?>