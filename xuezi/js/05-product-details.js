(()=>{
var lid=location.search.split("=")[1];
if(lid!==undefined)
	ajax(
		"get",
		"data/05-product-details/details.php?lid="+lid,
		""
	).then(data=>{
		var laptop=data.laptop,
			family=data.family;
		//console.log(data);
		var mImg=document.getElementById("mImg"),
			largeDiv=document.getElementById("largeDiv"),
			icon_list=document.getElementById("icon_list");
		//console.log(mImg,largeDiv,icon_list);
		mImg.src=laptop.pics[0].md;
		largeDiv.style.backgroundImage=`url(${laptop.pics[0].lg})`;
		var html="";
		for(var pic of laptop.pics){
			html+=`<li class="i1"><img src="${pic.sm}"
			data-md="${pic.md}" data-lg="${pic.lg}"></li>`
		}
		icon_list.innerHTML=html;
		var title=document.querySelector("#show-details>h3>a"),
			price=document.querySelector("#show-details>.price>.stu-price>span"),
			promise=document.querySelector("#show-details>.price>.promise"),
			spec=document.querySelector("#show-details>.spec>div");
		//console.log(title,price,promise,spec);
		title.innerHTML=laptop.title;
		price.innerHTML="￥"+laptop.price;
		promise.innerHTML+=laptop.promise;
		
		var html="";
		var list=family.laptop_list;
		//console.log(list);
		for(var specs of list){
			html+=`<a href="05-product-details.html?lib=${laptop.lid}" class=${
              laptop.lid===list.lid?"active":""
            }>${specs.spec}</a>`;
		}
		spec.innerHTML=html;
		
		var aForward=document.querySelector("#preview>h1>.forward");
		console.log(aForward);
		var aBackward=document.querySelector("#preview>h1>.backward");
		console.log(aBackward);
		var moved=0,
			LIWIDTH=62;
		aForward.onclick=function(){
			if(this.className.indexOf("disabled")==-1){
				moved++;move();
			}
		};
		aBackward.onclick=function(){
			if(this.className.indexOf("disabled")==-1){
				moved--;move();
			}
		};
		function move(){
			icon_list.style.left=-moved*LIWIDTH+20+"px";
			checkA();
		};
		function checkA(){
			if(laptop.pics.length-moved==5)
				aForward.className="forward disabled";
			else if(moved==0)
				aBackward.className="backward disabled";
			else{
				aForward.className="forward";
				aBackward.className="backward";
			}
		}
		if(laptop.pics.length<=5){
			aForward.className="forward disabled";
		};
		icon_list.onclick=function(e){
			var tar=e.target;
			if(tar.nodeName=="IMG"){
				mImg.src=tar.dataset.md;
				largeDiv.style.backgroundImage=`url(${tar.dataset.lg})`;
			}
		};	
		
		var superMask=document.getElementById("superMask");
		//console.log(superMask);
		var mask=document.getElementById("mask");
		superMask.onmouseover=function(){
			mask.style.display="block";
			largeDiv.style.display="block";
		};
		superMask.onmouseout=function(){
			mask.style.display="none";
			largeDiv.style.display="none";
		};
		var MSIZE=175;
		var SMSIZE=350;
		superMask.onmousemove=function(e){
			var X=e.offsetX,
				Y=e.offsetY;
			var left=X-MSIZE/2;
			var top=Y-MSIZE/2;
			if(top<0) top=0;
			else if(top>SMSIZE-MSIZE)
				top=SMSIZE-MSIZE;
			if(left<0) left=0;
			else if(left>SMSIZE-MSIZE)
				left=SMSIZE-MSIZE;
			mask.style.top=top+"px";
			mask.style.left=left+"px";
			largeDiv.style.backgroundPosition=`${-left*16/7}px ${-top*16/7}px`;
		};
		
	})
})()