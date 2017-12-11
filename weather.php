<?php
header("Content-Type:application/javascript");
$fun=$_REQUEST["callback"];
$result="nihao from 176.202.56.174";
echo "$fun('$result')";