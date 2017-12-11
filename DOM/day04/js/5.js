//定义开关变量canMove=false；
//定义鼠标相对于pop内的偏移量，暂时为0
//当鼠标在pop上按下时打开开关，记录鼠标相对于当前pop的偏移位置（offsetX，offsetY）
//当鼠标在窗口内移动时，获得鼠标相对于文档显示区的坐标（clientX，clientY），计算并设置pop的top=clientX-offsetX和left=clientY-offsetY
//当鼠标在pop上抬起时，关闭开关
var canMove=false;
var offsetX=0;
var offsetY=0;
pop.onmousedown=function(e){
	canMove=true;
	offsetX=e.offsetX;
	offsetY=e.offsetY;
	/*console.log(offsetX);
	console.log(offsetY);*/
}
window.onmousemove=function(e){
	if(canMove){
	var clientX=e.clientX;
	var clientY=e.clientY;
	/*console.log(clientX);
	console.log(clientY);*/
	pop.style.left=clientX-offsetX+"px";
	pop.style.top=clientY-offsetY+"px";
	}
}
pop.onmouseup=function(){
	canMove=false;
}