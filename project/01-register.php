<?php
	@$n=$_REQUEST("uanme");
	@$p=$_REQUEST("upwd");
	@$m=$_REQUEST("email");
	@$h=$_REQUEST("phone");
	@$u=$_REQUEST("user_name");
	@$g=$_REQUEST("gender");
	if($n==null || $n==""){
		die("uname required");
	}
	if($p==null || $p==""){
		die("upwd required");
	}
	if($m==null || $m==""){
		die("email required");
	}
	if($h==null || $h==""){
		die("phone required");
	}
	if($u==null || $u==""){
		die("user_name required");
	}
	require(init.php);
	$sql="INSERT INTO xz_user VALUES('$n','$p','$m','$h','$u','$g')";
	$sql="SET NAMES UTF8";
	$result=mysqli_query($conn,$sql);
	if($reault==false){
		echo "<script>alert('注册失败');</script>";
	}else{
		echo "<script>alert('注册成功');</script>";
	}
	echo $sql;
?>