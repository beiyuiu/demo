<?php
require('00_init.php');
@$lid = $_REQUEST["lid"];

$sql = "UPDATE  xz_user  SET  expire = '1'  WHERE uid = $lid";
@$result = mysqli_query($conn,$sql);

if($result){
    echo '{"code":1,"msg":"删除成功"}';
}else{
    echo '{"code":-1,"msg":"删除失败"}';
}