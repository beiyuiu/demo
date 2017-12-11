function $(id){
	return document.getElementById(id);
}
//声明一个xhr对象用于保存不同浏览器中创建的AJAX核心对象
function createXhr(){
	var xhr;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}