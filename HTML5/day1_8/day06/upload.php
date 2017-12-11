<?php
//1:获取上传文件所有信息
//2:文件名/文件大小/文件类型/临时文件放在哪里
//var_dump($_FILES);
//1:判断是否上传成功如果$_FILES为null上传失败
if(!empty($_FILES["myfile"])){
 //2:获取文件名
 $picname = $_FILES["myfile"]["name"];
 //3:获取文件大小
 $picsize = $_FILES["myfile"]["size"];
 //4:文件超过2MB不允许上传
 if($picsize>1024*1024*1024*2){
   die('{"code":-1,"msg":"上传文件过大超过2MB"}');
 }
 //5:判断文件的类型:图片
 $type = strstr($picname,".");//.gif .jpg .png
 if($type!=".gif" && $type!= ".jpg" && $type!=".png"){
   die('{"code":-2,"msg":"上传文件格式不正确"}');
 }
 //6:重新创建图片名,防止图片重名 11:36--11:39
 $pics = time().rand(1,9999).$type;
 //7:将临时文件移动指定的目录
 $src = $_FILES["myfile"]["tmp_name"];
 $des = "uploads/".$pics;
 move_uploaded_file($src,$des);
 //8:上传成功
 echo('{"code":1,"msg":"上传文件成功"}');
}