<?php
	$pid="130102198312262151";
	$birth=substr($pid,6,8);
	echo $birth."&nbsp;";
	$gender=substr($pid,-2,1)%2==1?"男":"女";
	echo $gender;
?>