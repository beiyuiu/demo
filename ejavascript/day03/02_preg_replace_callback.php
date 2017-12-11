<?php
$str="派出所的公安民警负责维护公共安全秩序";
$str=preg_replace_callback(
	'/公安|公共安全|派出所|民警/',
	function($kword){
		if($kword[0]=="派出所")
			return "PCS";
		else if($kword[0]=="公安")
			return "GA";
		else if($kword[0]=="民警")
			return "MJ";
		else
			return "GGAQ";
	},
	$str
);
echo $str;