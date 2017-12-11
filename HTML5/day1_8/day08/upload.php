<?php
require("00_init.php");
$rs =empty($_FILES);
if($rs==true){
	die('{"code":-1,"msg":"没有上传文件请检查"}');
}
$picname = $_FILES["mypic"]["name"];

$picsize = $_FILES["mypic"]["size"];
if($picsize>800*1024){
	die('{"code":-2,"msg":"上传文件过大超过800kb"}');
}
$type = strstr($picname,".");
if($type!=".gif" && $type!=".jpg" && $type!=".png" && $type!=".avi" && $type!=".mp4"){
	die('{"code":-3,"msg":"上传文件格式不正确"}');
}
$fileName = time().rand(1,9999).$type;
$src = $_FILES["mypic"]["tmp_name"];
$des = "uploads/".$fileName;
move_uploaded_file($src,$des);
echo('{"code":1,"msg":"上传成功"}');