<?php
/*(1)创建一个函数：arrMax()，接收一个数组做参数，返回该数组中所有数字的最大值；调用该函数。*/
function arrMax($arr){
	$max=$arr[0];
	for($i=1;$i<count($arr);$i++){
		if($arr[i]>$max){
			$max=$arr[i];
		}
	}return $max;
}
echo arrMax([12,13]);
/*(2)创建一个函数：arrMin()，接收一个数组做参数，返回该数组中所有数字的最小值；调用该函数。
function arrMin($arr){
	$min=$arr[0];
	for($i=1;$i<count($arr);$i++){
		if($arr[i]<$min){
			$min=$arr[i];
		}
	}return $min;
}
echo arrMin([]);
(3)创建一个函数：arrAvg()，接收一个数组做参数，返回该数组中所有数字的平均值；调用该函数。
function arrAvg($arr){
	$sum=0;
	$avg=0;
	$length=count($arr);
	for($i=0;$i<count($arr);$i++){
		$sum+=$arr[i];
		}
	$avg=$sum/$length;
	return $avg;
}
echo arrAvg([]);
(4)使用PHP访问MySQL中的tedu数据库，向emp表中插入一行新的员工记录。
$conn = mysqli_connect("172.0.0.1","root","","tedu",3306);
$sql = "INSERT INTO emp VALUES("")";
(5)使用PHP访问MySQL中的tedu数据库，从emp表中删除编号为1的员工记录；执行两次，看看结果是成功还是失败
$conn = mysqli_connect("172.0.0.1","root","","tedu",3306);
$sql = "DELETE * FROM emp WHERE eid=1";
*/
?>