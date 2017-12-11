<?php
/*$ageList = [12,51,13,23];
echo $ageList[0]."<br>";
echo $ageList[1]."<br>";
echo $ageList[2]."<br>";
echo $ageList[3]."<br>";
$ageList[3] = 24;
echo $ageList[3]."<br>";*/
/*
$priceText = [12,13,14,16,20];
#var_dump($priceText);   临时查看数据
$priceText[0]+=10;
$priceText[1]+=10;
$priceText[4]+=10;
echo $priceText[4]."<hr>";
#echo $priceText[5];  Notice: Undefined offset:运行错误
for($i=0;$i<count($priceText);$i++){
	echo $priceText[$i]."<br>";
}*/
/*
$nameText = ["联想","华硕","戴尔","惠普"];
for($i=0;$i<count($nameText);$i++){
	echo $nameText[$i]."<br>";
}*/
/*
$laptop = ['lnname'=>'联想','lid'=>1200];
$laptop['isOnsale'] = true ;

var_dump($laptop);
*/
 /**
 $arr = ['id'=>101,'name'=>"小花",'age'=>20,'score'=>500];
    foreach($arr as $v){
		echo $v.'&nbsp;&nbsp;';
    }
    foreach($arr  as $k=>$v){
		echo $k.$v.'&nbsp;&nbsp;'."<hr>";
    }*/
/**
//创建一个二维数组，保存购物车所有商品数据(一个购物车保存多条商品信息)，每个商品记录:图片、标题、单价、数量、是否勾选
$cart = [
	['pic'=>"img/1.png",'price'=>5000,'title'=>"戴尔2000",'num'=>5,'isG'=>true],
	['pic'=>"img/2.png",'price'=>7000,'title'=>"联想",'num'=>5,'isG'=>true],
	['pic'=>"img/3.png",'price'=>5000,'title'=>"戴尔5000",'num'=>5,'isG'=>true]
];
foreach($cart as $laptop){
	foreach($laptop as $k=>$v){
		echo $k.$v.'&nbsp;&nbsp;';
	}//var_dump($laptop);
}
*/
/**
*创建一个索引数组保存5个笔记本价格，通过foreach遍历数组并输出所有数据的和、最大值、最小值、平均值
*/
#$loptapPrice=[6000,4000,3000,4500,3500];
//$sum=0;
//foreach($loptapPrice as $v){
//	 $sum+=$v;
//}echo $sum;
//$max=$loptapPrice[0];
//foreach($loptapPrice as $v){
//	if($max<$v){
//		$max=$v;
//	}
//}echo $max;
//$min=$loptapPrice[0];
//foreach($loptapPrice as $v){
//	if($min>$v){
//		$min=$v;
//	}
//}echo $min;
//$avg=0;
//$sum=0;
//$num=count($loptapPrice);
//foreach($loptapPrice as $v){
//	 $sum+=$v;
//	$avg=$sum/$num;
//}echo $avg;
/**
*客户端通过地址栏向服务器发送两个数据,PHP服务器接受这两个数据,并判断*/
#var_dump($_REQUEST);
$n1=$_REQUEST['uname'];
$n2=$_REQUEST['upwd'];
if($n1=="dingding"&&$n2=="123456"){
	echo "欢迎";
}else{
	echo "错误";
}


?>