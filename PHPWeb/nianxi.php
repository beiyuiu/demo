<?php
/*
$i=100;
while($i>=100 && $i<=999){
	$a=$i/100;
    $b=($i/10)%10;
    $c=$i%10;
//pow(变量名,次数)求变量的次方
	if($i===pow($a,3)+pow($b,3)+pow($c,3)){;
	}
	$i++;
}
  echo $i."<br>";
*/
/*
$i=1;
$sum=0;
while($i<=10){
	$sum+=$i;
	echo "※";
	$i++;
}
*/
/*
$i=1;
$sum=0;
do{
	$sum+=$i;
	echo "※";
	$i++;
}while($i<=10);
*/
/*
$j = 0;
while($j<10){
	$i=1;
	$sum =0;
	while($i<=10){
		$sum+=$i;
		$i++;
		echo "※";	
	}
	echo "<br>";
	$j++;
}
*/
/*
$i=1;
while($i<=5){
	$j=1;
	$sum =0;
	while($j<=$i){
		$sum+=$j;
		$j++;
		echo "※";
	}
echo "<br>";
$i++;
}
*/
/*
$i=1;
while($i<=9){
	$j=1;
	$sup=1;
	while($j<=$i){
		$sup="$i"."*"."$j"."=".$i*$j."&nbsp;&nbsp;";
		$j++;
		echo $sup;
	}
echo "<br>";
$i++;
}
*/
 /*
 for($i=0;$i<=99;$i++){
	echo $i."<br>";
 }
 for($j=99;$j>=0;$j--){
	echo $j."<br>";
 }
for($i=0;$i<=98 ;$i+=2){
	echo $i."<br>";
 }
 for($j=95;$j>=0;$j-=5){
	echo $j."<br>";
 }
 */
 /*
 for($i=1,$sum=0;$i<=99;$i+=2){
	$sum+=$i;
	}
	echo $sum."<br>";
	*/
/*
$i=1;
$sum=0;
while($i<=99){
	$sum+=$i;
	$i+=2;
}
	echo $sum;
*/
/*
for($i=1;$i<=9;$i++){
	for($j=1;$j<=$i;$j++){
		echo "$i"."*"."$j"."=".$i*$j;
		echo "&nbsp;&nbsp;";
	}
	echo "<br>";
}
*/
/*
for($i=5,$j=99,$sum=0;$i<=30,$j>=94;$i+=5,$j--){
	$sum+=$i/$j;
}
echo $sum;

for($i=1,$sum=0;$i<=6;$i++){
	$sum+=(5*$i)/(100-$i);
}
echo $sum;
*/
/*
$i=5;
$j=99;
$sum=0;
while($i<=30 && $j>=94){
	$sum+=$i/$j;
	$i+=5;
	$j--;
}
echo $sum;
*/
/*
for($i=1,$sup=1;;$i++){
	$sup*=$i;
	if($sup>=10000){
		break;
	}
}
echo $sup;
*/
/*
for($i=1,$sum=0;$i<100;$i++){
	$sum+=$i;
	if($i%10===5){
		continue;
	}
}
echo $sum;
*/
#输出2000年及以后的5个闰年的年份
#能被4整除但不能被100整除；能被400整除
/*$year=2000;
$count=0;
for(;$count<=5;$year++){
	if(($year%4===0 && $year%100!==0)||($year%400===0)){
	   echo $year."<br>";
	   $count++;
}
	
}echo "<hr>";
*/
#输出100以内的所有质数。只能被1和自身整除的数
for($i=2;$i<=99;$i++){   #$i为进行质数判定的数字
	for($j=2;$j<$i;$j++){    #$j为除数
		
		if($i%$j===0){
			break;     #退出内层循环
		}
	}
	//判断$i与$j的大小
	//跳出内层循环的条件:①当循环进行时满足$i%$j===0时，跳出循环；②当循环进行if($i%$j===0)为假且此时$j<$i，终止内层循环。
	if($i===$j){
		echo $i."<br>";
	}	
}
	echo "<hr>";

?>