/**读取URL中的关键词?=xxxxxxx
*ajax请求服务器端查询包含关键词的商品
*返回结果
*将商品加载到页面中
*/
(()=>{
	var kw=location.search.split("=")[1] || "";
	ajax(
		"get",
		"data/04-products/products.php?kw="+kw+"&pno="+pno,
		""
	).then(output=>{
		var data=output.data;
		var html="";
		for(var p of data){
			`<li>
            <a href="05-product-details.html?lid=${p.lid}" title="${p.title}">
              <img src="${p.md}">
            </a>
            <p>
              <span class="price">¥${p.price}"</span>
              <a href="05-product-details.html?lid=${p.lid}">title={p.title}</a>
            </p>
            <div>
              <span class="reduce">-</span>
              <input type="text" value="1">
              <span class="add">+</span>
              <a href="#" data-lid="${p.lid}" class="addCart">加入购物车</a>
            </div>
          </li>`
		}
		var ulShowList=
			document.getElementById("show-list")
		ulShowList.innerHTML=html;
		/*var spans=ulShowList.querySelectorAll(".reduce,.add");
		for(var span of spans){
			span.onclick=function(){
				var input=this.parentNode.children[1];
				var n=parseInt(input.value);
				if(this.className=="add") n++;
				else if(n>1) n--;
				input.value=n;
			}
		}*/
		ulShowList.onclick=e=>{
			var tar=e.target;
			if(tar.className=="add"||tar.className=="reduce"){
				var input=tar.parentNode.children[1];
				var n=parseInt(input.value);
				if(tar.className=="add") n++;
				else if(n>1) n--;
				input.value=n;
			}
		}
		
		$("#show-list").on("click",".addCart",function(e){
			e.preventDefault();
			if($("#listLogin").is(":visible")){
				alert("请登录");
			}else{
				var $this=$(this);
				var lid=$this.data("lid");
				var count=$this.prev().prev().val();
				$.post(
					"data/cart/add.php",
					//{lid:lid,count:count}
					{lid,count}
				).then(loadCart);
			}
		});
		var $cart=$("#cart>.cart_content");
		function loadCart(){
			$.get("data/cart/list.php")
			.then(data=>{
				var html="";
				var total=0;
				for(var item of data){
					html+=`<div id="${item.iid}">
						<span>${item.title}</span>
						<div>
							<span class="reduce">-</span>
							<input type="text" value="${item.count}"/>
							<span class="add">+</span>
						</div>
						<span class="price">￥${(item.price*item.count).toFixed(2)}</span>
					</div>`;
				total+=item.price*item.count;
			}
			$cart.html(html);
			$("#total").html(total.toFixed(2));
			$cart.on(
				"click",".reduce,.add",function(){
				var $this=$(this);
				var iid=$this.parent().parent().attr("id"),
					count=$this.siblings("input").val();
				if($this.is(".add"))
					count++;
				else
					count--;
				$.post(
					"data/cart/update.php",
					{iid,count},
				).then(loadCart);
			})	
			})
		}
		loadCart();
		var pageCount=output.pageCount,
			pageNo=output.pageNo;
		var lis="";
		for(var i=0;i<pageCount;i++){
			lis+=(i!=pageNo?`<a href="#">${i+1}</a>`:
			`<a href="#" class="current">${i+1}</a>`);
		}
		var html=`<a href="#" class="previous">上一页</a>${
          lis
		}<a href="#" class="next">下一页</a>`
		var divPages=document.getElementById("pages")
		divPages.innerHTML=html;
		if(pageNo==0){
			divPages.firstElementChild.className=
				"previous disabled";
		}else if(pageNo==pageCount-1){
			divPages.lastElementChild.className=
				"next disabled";
		}else{
			divPages.firstElementChild.className=
				"previous";
			divPages.lastElementChild.className=
				"next";
		}

		//找到divPages中的除previous和next之外的所有a
		var as=divPages.querySelectorAll(
			":not(.previous):not(.next)"	
		);
		/**遍历as中的每个a
		*为每个a绑定单击事件
		*调用pageLoad，传入当前a的内容-1
		*找到divPages的第一个子元素，绑定单击事件
		*/
		/*for(var i=0;i<as.length;i++){
			as[i].onclick=function(){
				pagesLoad(this.innerHTML-1);
			}
		}*/
		divPages.onclick=e=>{
			var tar=e.target;
			if(!isNaN(tar.innerHTML)){
				pageLoad(tar.innerHTML-1);
			}
		}
		divPages.firstElementChild.onclick=
			divPages.lastElementChild.onclick=function(){
			if(this.className.indexOf("disabled")==-1){
				var curr=
					divPages.querySelector(".current");
				if(this==divPages.children[0])
					pagLoad(curr.innerHTML-2);
				else pageLoad(curr.innerHTML);
			}
		}
	});
}
pageLoad();