//定义函数，仅遍历指定父元素下的直接子元素
function getChildren1(parent){
	console.log(parent.nodeName);
	var children=parent.children;
	for(var i=0,len=children.length;i<len;i++){
		//为每个子元素调用和父元素完全相同的操作
		arguments.callee(children[i]);
	}
}
//循环方式
function getChildren2(parent){
	var iterator=document.createNodeIterator(parent,NodeFilter,SHOW_ELEMENT,null,false);
	do{
		var node=iterator.nextNode();
		if(node!=null)
			console.log(node.nodeName);
		else break;
	}while(true);
}
getChildren(document.body);