<? php
   header("Content-Type:application/json;charset=utf-8");
    $rows = [];
    $rows[] =["label"=>"һ����","value"=>130];
    $rows[] =["label"=>"������","value"=>180];
    $rows[] =["label"=>"������","value"=>110];
    $rows[] =["label"=>"�ļ���","value"=>230];
    echo json_encode($rows);
