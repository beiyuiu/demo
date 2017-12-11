<?php
	#声明响应消息头
	header("Content-Type:application/json");
	#声明一个数组
	$province=["黑龙江","吉林","辽宁"];
	#将数组通过json_encode()转换成JSON格式的字符串
	$str=json_encode($province);
	#将字符串响应给客户端
	echo $str;
?>