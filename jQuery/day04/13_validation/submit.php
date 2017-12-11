<?php
header("Content-Type:text/aplain");
@$uname=$_REQUEST["uname"];
@$topic=$_REQUEST["topic"];
var_dump($topic);
echo "注册成功:$uname";
/*多选按钮验证时name属性值要加[];写规则时写为——"name属性值[]"*/