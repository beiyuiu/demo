function ajax(method,url,data="",dataType="json"){
	return new Promise((resolve,reject)=>{
		//获取xhr
		var xhr=new XMLHttpRequest();
		//创建请求
		xhr.open(method,url,true);
		//设置请求消息头
		if(method=="post"){
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		}
		//设置回调
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4)
				if(xhr.status==200){
					if(dataType=="json")
						resolve(JSON.parse(xhr.responseText));
					else
						resolve(xhr.responseText);
			}else
				reject("请求错误:"+xhr.status);
		}
		//发送请求
		xhr.send(data);
	})
}