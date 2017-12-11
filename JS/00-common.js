function $(id){
	return document.getElementById(id);
}

function createXhr(){
	var xhr;
	if(window.XMLHttpRequest)
		return new XMLHttpRequest();
	else
		return new ActiveXObject("Microsoft.XMLHttp");
}