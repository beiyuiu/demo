<?php
	//判断闰年:年份被4整除，且不能被100整除的是闰年；年份能被400整除的是闰年。
	$shelfTime = time()*1000;//获取当前系统时间
	$year = 2000;
	$isLeapYear = (($year%4===0)&&($year%100!==0))||($year%400===0);
	echo "$year 是闰年吗: $isLeapYear";
?>