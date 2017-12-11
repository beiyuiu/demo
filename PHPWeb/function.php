<?php
/*封装一个函数*/
function print99(){
	for($i=1;$i<=9;$i++){
		for($j=1;$j<=$i;$j++){
		echo "$i"."*"."$j"."=".$i*$j."&nbsp;&nbsp;";
	}
	echo "<br>";
    }
}
#执行封装的函数
print99();
?>