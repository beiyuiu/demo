<?php
require("00_init.php");
$category = $_REQUEST["category"];
$arr = explode("_",$category);
$family_id = $arr[0];
//@$family_id = $REQUEST["family_id"];
if(!preg_match("/^[0-9]{1,}$/",$family_id)){
        die('{"code":-1,"msg":"类别id有误 $family_id"}');
  }
@$title = $_REQUEST["title"];
   /* if(!preg_match("/^[0-9]{1,}$/",$title)){
            die('{"code":-1,"msg":"类别id有误"}');
        }*/
@$subtitle = $_REQUEST["subtitle"];
   /* if(!preg_match("/^([_a-z0-9\x{4e00}-\x{9fa5}]+)$/u",$subtitle)){
            die('{"code":-1,"msg":"类别id有误"}');
        }*/
@$price = $_REQUEST["price"];

@$promise = $_REQUEST["promise"];

@$spec = $_REQUEST["spec"];

@$name = $_REQUEST["name"];

@$os = $_REQUEST["os"];

@$memory = $_REQUEST["memory"];

@$resolution = $_REQUEST["resolution"];

@$video_card = $_REQUEST["video_card"];

@$cpu = $_REQUEST["cpu"];

@$video_memory = $_REQUEST["video_memory"];

@$category = $arr[1];
@$disk = $_REQUEST["disk"];
@$details = $_REQUEST["details"];

//@$shelf_time = $_REQUEST["shelf_time"];
//@$sold_count = $_REQUEST["sold_count"];

@$is_onsale = $_REQUEST["is_onsale"];
//@$expire = $_REQUEST["expire"];
@$cuid = 1;
/*@$ctime = $_REQUEST["ctime"];
@$muid = $_REQUEST["muid"];
@$mtime = $_REQUEST["mtime"];
@$v1 = $_REQUEST["v1"];
@$V2 = $_REQUEST["V2"];
@$vi3 = $_REQUEST["vi3"];
@$vi4 = $_REQUEST["vi4"];*/
$sql = "INSERT INTO xz_laptop VALUES(null,";
$sql .= " $family_id,'$title','$subtitle',$price,'$promise',";
$sql .= " '$spec','$name','$os','$memory','$resolution','$video_card',";
$sql .= " '$cpu','$video_memory','$category','$disk','$details',";
$sql .= " unix_timestamp(),0,$is_onsale,'0','','',0,0,$cuid,now(),0,0)";
$result = mysqli_query($conn,$sql);
if(mysqli_error($conn)){
    echo mysqli_error($conn);
}
@$rowsCount = mysqli_affected_rows($conn);
if($result&&$rowsCount>0){
    echo  '{"code":1,"msg":"添加成功"}';
}else{
    echo '{"code":-1,"msg":"添加失败"}';
}
/*
+--------------+---------------+------+-----+---------------------+----------
---+
| Field        | Type          | Null | Key | Default             | Extra
   |
+--------------+---------------+------+-----+---------------------+----------
---+
| lid          | int(11)       | NO   | PRI | NULL                | auto_incr
nt |
| family_id    | int(11)       | YES  |     | NULL                |
   |
| title        | varchar(128)  | YES  |     | NULL                |
   |
| subtitle     | varchar(128)  | YES  |     | NULL                |
   |
| price        | decimal(10,2) | YES  |     | NULL                |
   |
| promise      | varchar(64)   | YES  |     | NULL                |
   |
| spec         | varchar(64)   | YES  |     | NULL                |
   |
| name         | varchar(32)   | YES  |     | NULL                |
   |
| os           | varchar(32)   | YES  |     | NULL                |
   |
| memory       | varchar(32)   | YES  |     | NULL                |
   |
| resolution   | varchar(32)   | YES  |     | NULL                |
   |
| video_card   | varchar(32)   | YES  |     | NULL                |
   |
| cpu          | varchar(32)   | YES  |     | NULL                |
   |
| video_memory | varchar(32)   | YES  |     | NULL                |
   |
| category     | varchar(32)   | YES  |     | NULL                |
   |
| disk         | varchar(32)   | YES  |     | NULL                |
  |
 details      | varchar(1024) | YES  |     | NULL                |
  |
 shelf_time   | bigint(20)    | YES  |     | NULL                |
  |
 sold_count   | int(11)       | YES  |     | NULL                |
  |
 is_onsale    | tinyint(1)    | YES  |     | NULL                |
  |
 expire       | enum('1','0') | YES  |     | 0                   |
  |
 cuid         | int(11)       | YES  |     | 1                   |
  |
 ctime        | datetime      | YES  |     | CURRENT_TIMESTAMP   |
  |
 muid         | int(11)       | YES  |     | 1                   |
  |
 mtime        | datetime      | YES  |     | 0000-00-00 00:00:00 |
  |
 v1           | varchar(255)  | YES  |     |                     |
  |
 V2           | varchar(255)  | YES  |     |                     |
  |
 vi3          | int(11)       | YES  |     | 0                   |
  |
 vi4          | int(11)       | YES  |     | 0                   |
  |
--------------+---------------+------+-----+---------------------+
*/