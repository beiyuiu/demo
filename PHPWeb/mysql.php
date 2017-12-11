<?php
/*使用PHP操作MySQL数据库*/
#连接到MySQL服务器
$conn = mysqli_connect("127.0.0.1","root","","tedu",3306);

#var_dump($conn);
#向服务器提交要执行的MySQL语句
$sql = "INSERT INTO dept VALUES(51,'Test51')";
$result = mysqli_query($conn,$sql);
#查看执行结果
if($result===false){
	echo"执行失败！请检查SQL语法:$sql";
	}else{
		echo "执行成功！请到数据库查看";
		}
?>