<?php
function cartCalc($price,$count,$discount){
	$result=0;
	$result=($price*$count-$discount);
	return $result;
}
echo cartCalc(12,5,5)."&nbsp;&nbsp;";
echo cartCalc(100,5,150)."&nbsp;&nbsp;";
?>