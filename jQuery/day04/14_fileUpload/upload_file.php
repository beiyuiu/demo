<?php
$file=$_FILES["file"];
//var_dump($file);
move_uploaded_file(
	$file["tmp_name"],//临时文件名
	"upload/".$file["name"]//目标文件夹和文件名
	);