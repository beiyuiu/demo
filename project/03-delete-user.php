<?php
	#接收前端传递过来的要删除的用户ID值
	$uid=$_REQUEST["uid"];
	#数据库连接
	require(init.php);
	#SQL语句
	$sql="delete from xz_user where uid=$uid";
	#执行SQL语句并接收结果
	$result=mysqli_query($conn,$sql);
	#根据删除的结果给出响应
	if($result==true){
		echo "1";
	}else{
		echo "0";
	}
?>