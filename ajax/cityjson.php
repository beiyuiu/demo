<?php
	header("Content-Type:application/json");
	$city=[
		[
			"齐齐哈尔",
			"牡丹江",
			"哈尔滨"
		],
		[	
			"长春",
			"吉林",
			"四平"
		],
		[
			"沈阳",
			"大连",
			"鞍山"
		]
	];
	$pid=$_REQUEST["pid"];
	$str=json_encode($city[$pid]);
	echo $str;
?>