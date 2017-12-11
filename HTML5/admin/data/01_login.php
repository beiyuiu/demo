< ? php
    header("Content-Type:application/json; charset=utf-8");
    $conn=mysqli_connect("127.0.0.1","root","xuezi",3306);
    $u=$_REQUEST["uname"];
    $p=$_REQUEST["upwd"];
    $uPattern='/[a-zA-Z0-9]{3,12}/';
    $pPattern='/[a-zA-Z0-9]{3,12}/';
    if(!preg_match($uPattern,$u)){
        echo '{"code":-2,"msg":"用户名格式不正确"}';
        exit;
    }；
    if(!preg_match($pPattern,$p)){
        echo '{"code":-2,"msg":"密码格式不正确"}';
        exit;
    }；
    $sql=" SELECT * FROM xz_user WHERE uname='$u' AND upwd=md5($p)";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($result);
    if($row==null){
        echo '{"code":-1,"msg":"用户名或密码有误"}';
    }else{
        echo '{"code":1,"msg":"登录成功"}';
    }
? >