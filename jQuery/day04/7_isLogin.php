<?php
session_start();
header("Content-Type:application/json");
require_once("./init.php");
@$uid=$_SESSION["uid"];
if($uid){
	$sql="select uname from xz_user where uid=$uid";
	$result=sql_execute($sql);
	echo json_encode(["ok"=>1,"uname"=>$result[0]["uname"]]);

}else
	echo json_encode(["ok"=>0,"uname"=>" "]);
/*1、在页面中同时准备了登录按钮和欢迎信息
2、定义专门验证服务器session中是否有uid的php
3、页面加载时，先请求服务器，判断是否已登录
	若登录，显示欢迎信息，隐藏登录按钮；
	未登录，显示登录按钮，隐藏欢迎信息
4、修改login.php在登陆成功后，立刻将uid保存到session
5、在登录对话框的登录按钮事件中：
	若登陆成功，显示欢迎信息，隐藏登录按钮
6、单击注销，请求服务器清除session中的uid，重新加载当前页
*/