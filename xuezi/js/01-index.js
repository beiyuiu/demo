function getTotalTop(elem){
	var sum=0;
	do{
		sum+=elem.offsetTop;
		elem=elem.offsetParent;
	}while(elem);
	return sum;
}
//加载楼层
(()=>{
	ajax("get","data/01-index/floors.php","")
	.then(output=>{
	//根据规定的模板，动态生成f1的HTML代码片段
	var html="";
	var f1=output.f1;
	for(var i=0;i<f1.length;i++){
		var p=f1[i];
		html+=i<2?`<div>
          <div class="desc">
            <p class="name">${p.title}</p>
            <p class="details">${p.details}</p>
            <p class="price">¥${
				parseFloat(p.price).toFixed(2)
			}</p>
            <a href="${p.href}" class="view">查看详情</a>
          </div>
          <img src="${p.pic}">
        </div>`:
		i==2?`<div>
          <div class="desc">
            <p class="name">${p.title}</p>
            <p class="price">¥${
			  parseFloat(p.price).toFixed(2)
			}</p>
            <a href="${p.href}" class="view">查看详情</a>
          </div>
          <img src="${p.pic}" title="${p.details}">
        </div>`:
		`<div class="product">
          <img src="${p.pic}" title="${p.details}">
          <p class="name">${p.title}</p>
          <p class="price">¥${
			parseFloat(p.price).toFixed(2)
		  }</p>
          <a href="${p.href}">查看详情</a>
        </div>`
	}
	document.getElementById("f1-content")
			.innerHTML=html;
	
	//根据规定的模板，动态生成f2的HTML代码片段
	var html="";
	var f2=output.f2;
	for(var i=0;i<f2.length;i++){
		var p=f2[i];
		html+=i<2?`<div>
          <div class="desc">
            <p class="name">${p.title}</p>
            <p class="details">${p.details}</p>
            <p class="price">¥${
				parseFloat(p.price).toFixed(2)
			}</p>
            <a href="${p.href}" class="view">查看详情</a>
          </div>
          <img src="${p.pic}">
        </div>`:
		i==2?`<div>
          <div class="desc">
            <p class="name">${p.title}</p>
            <p class="price">¥${
			  parseFloat(p.price).toFixed(2)
			}</p>
            <a href="${p.href}" class="view">查看详情</a>
          </div>
          <img src="${p.pic}" title="${p.details}">
        </div>`:
		`<div class="product">
          <img src="${p.pic}" title="${p.details}">
          <p class="name">${p.title}</p>
          <p class="price">¥${
			parseFloat(p.price).toFixed(2)
		  }</p>
          <a href="${p.href}">查看详情</a>
        </div>`
	}
	document.getElementById("f2-content")
			.innerHTML=html;

	//根据规定的模板，动态生成f3的html代码片段
		var html="";
		var f3=output.f3;
		for(var i=0;i<f3.length;i++){
			var p=f3[i];
			html+=i<2?`<div>
			<div class="desc">
            <p class="name">${p.title}</p>
            <p class="details">${p.details}</p>
            <p class="price">¥${
				parseFloat(p.price).toFixed(2)
			}</p>
            <a href="${p.href}" class="view">查看详情</a>
          </div>
          <img src="${p.pic}">
        </div>`:
		i==2?`<div>
          <div class="desc">
            <p class="name">${p.title}</p>
            <p class="price">¥${
			  parseFloat(p.price).toFixed(2)
			}</p>
            <a href="${p.href}" class="view">查看详情</a>
          </div>
          <img src="${p.pic}" title="${p.details}">
        </div>`:
		`<div class="product">
          <img src="${p.pic}" title="${p.details}">
          <p class="name">${p.title}</p>
          <p class="price">¥${
			parseFloat(p.price).toFixed(2)
		  }</p>
          <a href="${p.href}">查看详情</a>
        </div>`
		}
		document.getElementById("f3-content")
				.innerHTML=html;
		//获得id为f1的元素距页面顶部的总距离totalTop
		var f1TotalTop=getTotalTop(document.getElementById("f1"));
		//为window添加滚动事件监听
			//获得页面滚动高度scrollTop
			//如果totalTop<=scrollTop+innerHeight/2，让lift显示；否则，让lift隐藏
		var lift=document.getElementById("lift");
		window.addEventListener("scroll",function(){
			var scrollTop=document.body.scrollTop || 
				document.documentElement.scrollTop;
			/*var sum=scrollTop+innerHeight/2;
			var div=document.getElementById("lift");
			if(totalTop<=sum){
				div.style.display="block";
			}else{
				div.style.display="none";
			}*/
			lift.style.display=f1TotalTop<=scrollTop+innerHeight/2?
				"block":"none";
			//定义楼层高度变量FHEIGHT=699;
			//找到class为floor每个楼层元素fs，遍历每个楼层，获得当前楼层距离body顶部的总距离totalTop；
			//计算楼层亮灯区域的开始位置：start=totalTop-innerHeight/2；
			//计算结束位置end为start+FHEIGHT;
			//如果scrollTop>=start且scrollTop<end，就退出循环；
			//找到所有电梯按钮li，在lift下找到class为lift_item_on的li，将其class恢复为lift_item；
			//设置lift第i个li的class为lift_item_on
			if(lift.style.display=="block"){
			var FHEIGHT=699;
			var fs=document.querySelectorAll(".floor");
			//console.log(fs);
			for(var i=0;i<fs.length;i++){
				var totalTop=getTotalTop(fs[i]);
				var start=totalTop-innerHeight/2;
				var end=start+FHEIGHT;
				if(scrollTop>=start&&scrollTop<end) 
					break;
			}
			var currLi=lift.querySelector(".lift_item_on")
			if(currLi)	currLi.className="lift_item";
			lift.querySelector(`li:nth-child(${i+1})`).className="lift_item_on";
			}
		});
		//在lift下找class为lift_list下的class为lift_item的所有a保存到as中
		//遍历as，为每个as绑定单击事件
		var as=lift.querySelectorAll(".lift_list .lift_item");
		//console.log(as);
		for(let i=0;i<as.length;i++){
			as[i].onclick=function(){
				//console.log("去"+(i+1)+"楼");
				//查找ID为fi的元素fi
				//获得fi距body顶部的总距离totalTop
				//让window滚动到totalTop
			
				var fi=document.getElementById("f"+(i+1));
				//console.log(fi);
				var totalTop=getTotalTop(fi);
				//window.scrollTo(0,totalTop-70);
				$("html,body").stop(true).animate({scrollTop:totalTop-70},500);
			}
		}
	})
})();
//加载广告轮播
(()=>{
	ajax("get","data/01-index/banners.php","")
	.then(data=>{
		var htmlImgs="";
		var htmlIdx="";
		const LIWIDTH=960;
		
		/*for(var i=0;i<data.length;i++){
			var p=data[i];*/
		for(var p of data){
			htmlImgs+=`<li>
              <a href="${p.href}" title="${p.title}">
                <img src="${p.img}">
              </a>
            </li>`;
			htmlIdx+="<li></li>";
		}
		var bannerImgs=
			document.getElementById("banner-img");
		bannerImgs.style.width=
			LIWIDTH*data.length+"px";
				bannerImgs.innerHTML=htmlImgs;
		document.getElementById("indicators")
				.innerHTML=htmlIdx;

		var i=0;wait=3000,LIWIDTH=960,
			$banner=$(bannerImg);
		function move(){
			setTimeout(()=>{
				if(i<data.length-1){
					i++;
					$banner.css("left",-LIWIDTH*i);
					move();
				}else{
					$(bannerImg).css("tarnsition","");
					i=0;
					$banner.css("left",-LIWIDTH*i);
					$(bannerImg).css("tarnsition","all .3s linear")
				}
				
				
			},3000)
		}
	})
})();

