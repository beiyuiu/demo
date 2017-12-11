<?php
//$i=1;
//while( $i<=10 ){
//	if($i%2==0){
//		$i++;
//		echo "□";
//	}
//	echo "■";
//	$i++;
//}
$i=1;
$sum=0;
while($sum<10000){
	$sum=$sum+$i;
	$i+=1;
	
}
echo "$i<br>";
echo $sum;
?>