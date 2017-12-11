/**查找触发事件的元素
*查找class为tree下的直接子元素li下的直接子元素span
*绑定事件
*遍历所有span，为每个span绑定单击事件；this->当前单击的span；如果自己的class是open将自己的class清空
*否则找到旁边可能开着的span；如果找到就清除class将自己打开
*/
var spans=document.querySelectorAll(".tree>li>span");
for(var span of spans){
		span.onclick=function(){
		if(this.className=="open"){
			this.className="";
		}else{
			var openSpan=document.querySelector(".tree>li>span.open");
			if(openSpan!=null) openSpan.className="";
			this.className="open";
		}
	}
}