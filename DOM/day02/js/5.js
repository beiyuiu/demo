(()=>{
  //查找id为form1的表单form
 // var form=document.getElementById("form1");
  var form=document.querySelector("#form1");
  //查找表单中name为username的文本框txtName
var txtName=document.getElementsByTagName("input");
console.log(txtName);
/*var txtName=document.querySelector("#form1 [name=username]");
  //查找表单中name为pwd的文本框txtPwd
//var txtPwd=document.getElementsByTagName("input").getAttribute("pwd");
var txtPwd=document.querySelector("#form1 [name=pwd]");
  //为txtName绑定获得焦点事件
  txtName.onfocus=
	txtPwd.onfocus=function(){
	this.className="txt_foucs";
	this.parentNode.nextElementSibling.children[0].className="";
	}
  //为txtPwd绑定获得焦点事件

  //两者共用一个函数: 
    //给自己穿txt_focus
    //找到旁边的div,清空其class


  //为txtName绑定失去焦点事件
    //定义正则表达式/^\w{1,10}$/
	 txtName.onblur=function(){
		var reg=/^\w{1,10}$/g;
		vali(this,reg);
	}
    //调用vali,传入this和正则作为参数
 
  //为txtPwd绑定失去焦点事件
    //定义正则表达式/^\d{6}$/
    //调用vali,传入this和正则作为参数
	txtPwd.onblur=function(){
		var reg=/^\d{6}$/g;
		vali(this,reg);
	}

  //定义函数vali,参数: 文本框, 正则
    //给文本框脱衣服
    //找到文本框旁边的div
    //如果用正则验证文本框的内容通过
      //为div穿vali_success
    //否则
      //为div穿vali_fail
function vali(txt,reg){
		txt.className="";
		var div=txt.parentNode.nextElementSibling.children[0];
		if(reg.test(txt.value)==true)
			div.className="vali_success";
		else div.className="vali_fail";
	
}*/
})()