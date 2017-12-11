<?php
$box =[
	['id'=>1,'name'=>"小哈",'salary'=>2500,'birthday'=>754552424243,'isOn'=>true],
	['id'=>2,'name'=>"小李",'salary'=>3500,'birthday'=>542824872445,'isOn'=>true],
	['id'=>3,'name'=>"小明",'salary'=>4500,'birthday'=>451246871545,'isOn'=>true]
];
for($i=0;$i<count($box);$i++){
	$b=$box[$i];
	echo "编号:$b[id] 姓名:$b[name] 工资:$b[salary] 生日:$b[birthday] 是否在岗:$b[isOn]<br>";
	
}
?>