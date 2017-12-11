//模块二：分页显示产品列表
/**
 *分页显示产品列表
 *@param pno 当前页码
 *@param pageSize  当前页记录条数
 */
function loadProductByPage(pno,pageSize){
    /**1、发送ajax请求获取当前页内容
     *2、参数pno pageSize
     *3、接收服务器返回的数据output["data"]=[..]
     *4、拼接字符串
     *5、若当前产品已失效，不再添加“详细、修改、删除”
     *6、创建分页条[1][2][3][4][5]
     *7、拼接计算
     */
    $.ajax({
        type:"get",
        url:"data/04_product_list.php",
        data:{pno:pno,pageSize:pageSize},
        success:function(pager){
            var html = "";
            var rows = pager.data;
            for(var i=0;i<rows.length;i++){
                var obj= rows[i];
                html+=`<tr`;
                if(obj.expire==1){
                    html+=` class="expire"`;
                }
                html+=`
				>
					<td><input type="checkbox"/></td>
					<td>${obj.lid}</td>
					<td><img src="${obj.sm}"/></td>
					<td class="pprice">${obj.price}</td>
					<td class="pname">${obj.name}</td>
					<td>${obj.spec}</td>
					<td>`;
                if(obj.expire==0){
                    html+=`
						<a href="${obj.lid}" class="btn-del">删除</a>
						<a href="${obj.lid}" class="btn-update">更新</a>
						<a href="${obj.lid}" class="btn-detail">详细</a>
					`;
                }
                html+=`
					</td>
				</tr>
				`;
            }
            $("#tbody1").html(html);
            //创建分页条[1][2][3][4][5];拼接列表到id为pagination的ul
            var html="";
            html+=` <li class="active"><a href="#">${pager.pno}</a></li>`;
            if(pager.pno-2>0){
                html+=`<li><a href="#">${pager.pno-2}</a></li>`;
            }
            if(pager.pno-1>0){
                html+=`<li><a href="#">${pager.pno-1}</a></li>`;
            }
            if(pager.pno+1<=pager.count){
                html+=`<li><a href="#">${pager.pno+1}</a></li>`;
            }
            if(pager.pno+2<=pager.count){
                html+=`<li><a href="#">${pager.pno+2}</a></li>`;
            }
            $("#pagination").html(html);
        },
        error:function(){
            alert("网络故障，请检查");
        }
    });
}
loadProductByPage(1,8);
//为页码绑定单击事件（用事件代理机制绑定单击事件）
$("#pagination").on("click","li a",function(e){
    e.preventDefault();
    var pno =$(this).html();
    loadProductByPage(pno,8);
});
//模块三：删除指定产品
/*删除之前确认；查询前要排序
 *a:delete from xz_laptop where lid= 3;
 *订单表：错误订不存在的产品
 *购物车：错误购买不存在的产品
 *b:update xz_laptop set expire =1 where lid=3;
 *expire  失效(下架)
 *c:项目需要一种"超级管理员拥有项目所有权限->可以删除"
 *解决思路：创建历史表
 id   del_time	del_user  lid	title   price...
 1    2017.10.18  admin     1   Apple Mac  6000.00
 *d:
 */
/*获取所有删除产品按钮；绑定点击事件——事件代理；确认用户是否删除——>显示产品名称；发送ajax请求删除产品；获取返回结果；加载class_tr_背景灰色*/
$("#tbody1").on("click","a.btn-del",function(e){
    e.preventDefault();
    var rs =window.confirm("是否要删除指定记录");
    var lid =$(this).attr("href");
    if(!rs){
        return;
    }
    $.ajax({
        type:"POST",
        url:"05_product_del.php",
        data:{lid:lid},
        success:function(data){
            if(data.code>0){
                alert("删除成功");
                loadProductByPage(1,8);
            }else{
                alert("删除失败");
            }
        },
        error:function(){
            alert("网络故障请检查");
        }
    });
});
//模块四：更新产品价格
$("#tbody1").on("click","a.btn-update",function(e){
    e.preventDefault();
    var tr = $(this).parents("tr");
    var fname = tr.find(".pname").html();
    var price = tr.find(".pprice").html();
    var updateDiv = $(".update-jumbotron");
    updateDiv.find(".pname").html(fname);
    updateDiv.find(".input-price").val(price);
    var lid = $(this).attr("href");console.log(lid);
    $("[data-action='update-ok']").data("lid",lid);
    updateDiv.show(500);
});
$("[data-action='update-ok']").click(function(e){
    e.preventDefault();
    var lid = $(this).data("lid");

    var price = $(".input-price").val();
    $.ajax({
        type:"POST",
        url:"data/10_product_update.php",
        data:{lid:lid,price:price},
        success:function(data){
            if(data.code>0){
                alert("更新成功");

            }else{
                alert("更新失败");
            }
        },
        error:function(){
            alert("网络故障请检查");
        }
    });
});
$("[data-action='update-cancel']").click(function(e){
   e.preventDefault();
    $(".update-jumbotron").hide(500);
});
//模块五：显示产品详细信息