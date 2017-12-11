/**
*查找触发事件的元素，绑定事件，查找要修改的元素，修改元素
*查找table下的thead下的input，绑定单击事件，查找table下的tbody下作为第一个子元素的td下的input，遍历所有input，将当前input的checked属性改为和全选input的checked一致
*/
var chbAll=document.querySelector("table>thead input");
chbAll.onclick=function(){
	var inputs=document.querySelectorAll("table>tbody td:first-child>input");
	for(var input of inputs){
		input.checked=chbAll.checked;
	}
}
/*查找table下的tbody下作为第一个子元素的td下的input，遍历所有input，遍历每个input，为每个input绑定单击事件，如果自己未选中则chbAll也不选中*/
/*否则查找table下tbody下作为第一个子元素的td下的未选中的input，只要找到chbAll不选否则chbAll选中*/
var inputs=document.querySelectorAll("table>tbody td:first-child>input");
for(var input of inputs){
	input.onclick=function(){
		if(!input.checked)
			chbAll.checked=false;
		else{
			var checked=document.querySelector("table>tbody td:first-child>input:not(:checked)");
			chbAll.checked=(checked==null);
		
		}
	}
}