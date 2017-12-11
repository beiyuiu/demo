/**
 * Created by web-01 on 2017/10/24.
 */
/**
*1、创建产品类别下拉菜单：页面加载成功后发送ajax请求；获取产品类别列表；创建产品类别下拉菜单2、提交数据：点击提交，获取用户输入的参数
 */

$(function(){
    $.ajax({
        type:"GET",
        url:"data/10_product_padd.php",
        success:function(data){
            var html ="";
            html +="<option value='-1'>-----请选择-----</option>";
            $.each(data,function(idx,obj){
                html+=`
                <option value="${obj.fid}_${obj.name}">${obj.name}</option>
                `;
            });
            $("#category").html(html);
        },
        error:function(){
                alert("网络故障请检查");
        }
    })
});

$("#btn11").click(function(){
    alert(1); var title = $("#title").val();
    var titleReg = /^[\w\s\u4e00-\u9fa5]{1,}$/i;
    if(!titleReg.test(title)){
        $("#title").parent().next().css("color","red").html("标题格式不正确");
        return;
    }
    var subtitle = $("#subtitle").val();
    var subtitleReg = /^[\w\s\u4e00-\u9fa5]{1,}$/i;
    if(!subtitleReg.test(subtitle)){
        $("#subtitle").parent().next().css("color","red").html("标题格式不正确");
        return;
    }
    var price = $("#price").val();
    var priceReg =/^[+]?(?:0|[1-9]\d*)(?:\.\d{1,2})?$/ ;
    if(!priceReg.test(price)){
        $("#price").parent().next().css("color","red").html("最多有两位小数位");
    }
    var promise = $("#promise").val();
    var promiseReg = /^[\u4e00-\u9fa5]{1,}$/i;
    if(!promiseReg.test(promise)){
        $("#promise").parent().next().css("color","red").html("格式不正确");
    }
    var data = $("#form-product").serialize();
    $.ajax({
        type:"POST",
        url:"data/09_product_add.php",
        data:data,
        success:function(data){
            alert(data.msg);
        },
        error:function(){
            alert("网络错误请检查");
        }
    });
});