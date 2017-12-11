<?php
header("Content-Type:application/javascript");
$list=getallheaders();
$lang=$list["Accept-Language"];
$firstLang=substr($lang,0,2);
$hi="";
if($firstLang=="zh")
	$hi="你好";
else if($firstLang=="en")
	$hi="Hello";
else if($firstLang=="ko")
	$hi="안녕하세요";
else if($firstLang=="ja")
	$hi="こんにちは";

echo $hi;