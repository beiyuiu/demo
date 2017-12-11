//定义函数，仅遍历指定父元素下的直接子元素
function getChildren(parent){
	console.log(parent.nodeName);
	var children=parent.children;
	for(var i=0;i<children.length;i++){
		//为每个子元素调用和父元素完全相同的操作
		arguments.callee(children[i]);
	}
}
getChildren(document.body);