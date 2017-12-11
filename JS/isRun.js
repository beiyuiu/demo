/*只做闰年判断，通过参数判断年份，返回boolean类型的值表示是否为闰年*/
/*
*判断闰年
*year为要判断的年份
*返回值为true为闰年，为false为平年
*/
function isRun(year){
	return year%4==0 && year%100!=0 || year%4==0;
}