<?php
require(data/00_init.php);
@$lid=$_REQUEST["lid"];
$sql="SELECT lid,title,price,spec,name,os,disk,category FROM xz_laptop WHERE lid=$lid";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
if(!$row){
	//echo mysqli_error($conn);//显示详细的错误信息
	die('{"code":-1,"msg":"'.mysqli_error($conn).'"}');
}
echo json_encode($row);