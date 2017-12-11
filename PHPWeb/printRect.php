<?php
function printRect($i,$j){
	for($rows=1;$rows<=$i;$rows++){
		for($cols=1;$cols<=$j;$cols++){
				echo "※ ";
			}
			echo "<br>";
	}
	echo "<br>";
}
printRect(5,5);
printRect(10,5);
printRect(5,7);
?>