<?php
	header("Content-Type:application/xml");
	$xml="<?xml version='1.0' encoding='utf-8'?>";
	$xml.="<list>";
		$xml.="<stu>";
			$xml.="<name>卡卡西</name>";
			$xml.="<gender>男</gender>";
			$xml.="<age>30</age>";
		$xml.="</stu>";
	$xml.="</list>";
	echo $xml;
?>