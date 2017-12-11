<?php
function maxNum($num1,$num2,$num3,$num4,$num5){
	$max=$num1;
	if($max<$num2){
		$max =$num2;
	}
	if($num3>$max){
		$max =$num3;
	}
	if($num4>$max){
		$max=$num4;
	}
	if($num5>$max){
		$max=$num5;
	}
}
maxNum(1,2,5,3,8);
?>