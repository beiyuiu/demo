<? php
   header("Content-Type:application/json;charset=utf-8");
    $rows = [];
    $rows[] =["label"=>"一季度","value"=>130];
    $rows[] =["label"=>"二季度","value"=>180];
    $rows[] =["label"=>"三季度","value"=>110];
    $rows[] =["label"=>"四季度","value"=>230];
    echo json_encode($rows);
