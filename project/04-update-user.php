<?php
	#1、接收要修改的用户ID
	$uid=$_REQUEST["uid"];
	#2、查询$uid对应的用户
	require("00-init.php");
	$sql="select * from xz_user where uid=$uid";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>修改用户-<?php echo $row["uname"];?></title>
</head>
<body>
	<form action="04-update.php" method="post">
		<!--1、登录文本框（禁用）-->
		<p>
			登录名：<input type="text" value="<?php echo $row['uname'];?>" disabled>
		</p>
		<!--2、登录密码框-->
		<p>
			登录密码：<input type="password" name="upwd" value="<?php echo $row['upwd'];?>">
		</p>
		<!--3、电子邮件框-->
		<p>
			电子邮件：<input type="text" name="email" value="<?php echo $row['email'];?>">
		</p>
		<!--4、电话文本框-->
		<p>
			登录名：<input type="text" name="phone" value="<?php echo $row['phone'];?>">
		</p>
		<!--5、用户名称文本框-->
		<p>
			用户名称：<input type="text" name="user_name" value="<?php echo $row['user_name'];?>">
		</p>
		<!--6、用户性别选项框-->
		<p>
			用户性别：<select name="gender">
				<option value="0"
					<?php
						if($row['gender']=="0"){
							echo "selected";
						}
					?>
				>男</option>
				<option value="1" 
					<?php
						if($row['gender']=="1"){
							echo "selected";
						}
					?>
				>女</option>
			</select>
		</p>
		<!--7、用户ID——隐藏域-->
		<p>
			<input type="hidden" name="uid" value="<?php echo $row['uid'];?>">
		</p>
		<!--8、提交按钮-->
		<button onclick="">修改</button>
	</form>
</body>
</html>