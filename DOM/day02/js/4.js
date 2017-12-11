//获得样式表对象sheet
var sheet=document.styleSheets[1];
//获得要修改的样式所在的规则
var ruleS=sheet.cssRules[4];
//获得子规则
var ruleS_start=ruleS.cssRules[0];
var ruleS_end=ruleS.cssRules[1];
//获得要修改的样式所在的规则
var ruleM=sheet.cssRules[5];
//获得子规则
var ruleM_start=ruleM.cssRules[0];
var ruleM_end=ruleM.cssRules[1];
//获得要修改的样式所在的规则
var ruleH=sheet.cssRules[6];
//获得子规则
var ruleH_start=ruleH.cssRules[0];
var ruleH_end=ruleH.cssRules[1];

var now=new Date();
var s=now.getSeconds();
var m=now.getMinutes();
var h=now.getHours();
var sdeg=s/60*360;//秒针起始的旋转角度
var mdeg=(m*60+s)/3600*360;//分针起始的旋转角度
var hdeg=(h*3600+m*60+s)/(3600*12)*360;//时针起始的旋转角度

//修改规则中的css属性
ruleS_start.style.transform="rotate("+sdeg+"deg)";
ruleS_end.style.transform=
  "rotate("+(sdeg+360)+"deg)";
ruleM_start.style.transform="rotate("+mdeg+"deg)";
ruleM_end.style.transform=
  "rotate("+(mdeg+360)+"deg)";
ruleH_start.style.transform="rotate("+hdeg+"deg)";
ruleH_end.style.transform=
  "rotate("+(hdeg+360)+"deg)";