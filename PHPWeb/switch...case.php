<?php
$payWay = 2;
$result = null;
switch($payWay){
	case 1:
		$result ="在线支付";
		break;
	case 2:
		$result= "货到付款";
		break;
	case 3:
		$result= "支付宝支付";
		break;
	case 4:
		$result= "京东白条";
		break;
	default:
		$result= "其它方式";
}
echo "付款方式:$result";
?>