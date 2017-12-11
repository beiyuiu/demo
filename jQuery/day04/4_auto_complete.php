<?php
header("Content-Type:application/json");
require_once("./init.php");
@$kw=$_REQUEST["term"];
$sql='SELECT lid,title,sold_count FROM xz_laptop ';
if($kw){
  $kws=explode(" ",$kw);//js:split
  for($i=0;$i<count($kws);$i++){
    $kws[$i]=" title like '%".$kws[$i]."%'";
  }
  $where=" where ".implode(" and ",$kws);
  $sql=$sql.$where;
}
$sql=$sql." order by sold_count desc limit 10 ";
echo json_encode(sql_execute($sql));
/*
[
  {title:xxxx,  sold_count:xxx},
  {title:xxxx,  sold_count:xxx},
  {title:xxxx,  sold_count:xxx},
  {title:xxxx,  sold_count:xxx},
]
*/