<?php
require("00_init.php");
@$low=$_REQUEST["low"];
@$high=$_REQUEST["high"];
@$kw=$_REQUEST["kw"];
@$pno=$_REQUEST["pno"];
if(!$low){//下限
	$low=0;
};
if(!$high){//上限
	$high=2100000000;
};
if(!$kw){//关键字
	$kw="";
};
if(!$pno){//当前页数
    $pno=1;
};
$sql="SELECT count(*) FROM xz_laptop WHERE title LIKE '%$kw%' AND price >=$low AND price <=$high";
$result=mysqli_query($conn,$sql);
@$row=mysqli_fetch_row($result);
$recordCount=intval($row[0]);
$pageSize=8;
$offset = ($pno-1)*$pageSize;
$sql = " SELECT p.lid,p.title,p.price,p.os";
$sql .=",p.spec,p";
$sql .=" .expire,pic.sm,f.name";
$sql .=" FROM xz_laptop p,";
$sql .=" xz_laptop_family f,";
$sql .=" xz_laptop_pic pic";
$sql .=" WHERE p.title LIKE '%$kw%' AND p.price >=$low AND p.price <=$high";
$sql .=" GROUP BY p.lid";
$sql .=" LIMIT $offset,$pageSize";
$result = mysqli_query($conn,$sql);
if(mysqli_error($conn)){
    echo mysqli_error($conn);
}
@$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
//9: 依据总记录数计算总页数
$pageCount = ceil($recordCount/$pageSize);
//10:将当前页码;当前页内容;总记录数，总页数,页大小一并发送
$output = [
  "kw"=>$kw,
  "low"=>$low,
  "high"=>$high,
  "pageSize"=>$pageSize,   //页大小
  "pageCount"=>$pageCount, //总页数
  "pno"=>$pno,             //当前页码
  "data"=>$rows            //当前页内容
];
//11:输出
echo json_encode($output);