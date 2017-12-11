<?php
//$status = 3;
//$result = null;
//if($status===1){
//	$result = "等待付款";
//}else{
//	if($status===2){
//		$result = "备货中";
//	}else{
//		if($status===3){
//			$result = "运输中";
//		}else{
//			if($status===4){
//				$result = "送货中";
//			}else{
//				if($status===5){
//					$result = "订单完成";
//				}else{
//					$result = "其他";
//				}
//			}
//		}
//	}
//}
//echo "订单状态:$result";
/*创建一个变量保存成绩，600以上一本，500以上二本，400以上三本，300以上专科，否则复读
$score = 350;
$result = null;
if($score>600){
	$result ="一本";
}else if($score>500){
	$result ="二本";
}else if($score>400){
	$result ="三本";
}else if($score>300){
	$result ="专科";
}else{
	$result ="复读";
}
echo "成绩结果:$result";
*/
$payWay = 1;
$result = null;
if($payWay===1){
	$result ="在线支付";
}else if($payWay===2){
	$result ="货到付款";
}else if($payWay===3){
	$result = "支付宝支付";
}else if($payWay===4){
	$result ="京东白条";
}else{
	$result ="其它方式";
}
echo "付款方式:$result";
?>