//让id为container下的第一个div在最上层
var as=document.querySelectorAll(".tabs [data-trigger=tab]");
/**/
for(var a of as){
	a.onclick=function(){
		var i=this.href.lastIndexOf("#");
		var id=this.href.slice(i);
//var id=this.href;
//console.log(id);
		var targetDiv=document.querySelector(id);
		if(targetDiv.style.zIndex==""){
			var divs=document.querySelectorAll("#container div");
			for(var div of divs)
				div.style.zIndex="";
			targetDiv.style.zIndex=10;
		}
	}
}