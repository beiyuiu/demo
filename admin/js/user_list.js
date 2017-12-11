//存取页面大小
var pageSize = localStorage['pageSize'];
if(!pageSize){
  pageSize = 10;
}
$('#page-size').val(pageSize).change(function(){
  localStorage['pageSize'] = $(this).val();
  loadProductByPage(1, $(this).val());
});

//分页条单击事件处理
$('#pagination').on('click', 'li a', function(e){
  e.preventDefault();
  loadProductByPage($(this).attr('href'), localStorage['pageSize']);
})

//分页加载数据
function loadProductByPage(pno, pageSize){
  $('#table-laptop tbody').html('<div class="loading"><img src="img/loading.gif" alt=""></div>');
  $.ajax({
    url: 'data/08_user_list.php',
    data: {pno:pno, pageSize: pageSize},
    success: function(pager){
      //表格内容
      var html = '';
      $.each(pager.data, function(i, u){
        html += `
          <tr>
            <td><input type="checkbox" data-action="${u.uid}"></td>
            <td><p class="uid" title="${u.uid}">${u.uid}</p></td>
            <td><img class="pic" src="img/avatar/s_${u.avatar}"></td>
            <td><p class="fname" title="${u.uname}">${u.uname}</p></td>
            <td><p class="spec" title="${u.gener}">${u.gender==0?"男":"女"}</p></td>
            <td><p class="phone" title="${u.phone}">${slicephone(u.phone)})</p></td>
            <td>
            `;
            if(u.expire==0){
              html += `
                    <a href="#"  data-action="detail" data-id="${u.uid}">详情</a>
                    <a href="#"  data-action="update" data-id="${u.uid}">修改</a>
                    <a href="#"  data-action="delete" data-id="${u.uid}">删除</a>
                    <a href="#"  class="btn-upload" data-id="${u.uid}">上传头像</a>
                    <a href="${u.uid}" class="btn-role" >拥有角色</a>
                    <a href="${u.uid}" class="btn-acl" >授权</a>
                 `;
              }
             html += `
                    </td>
                </tr>
              `;
            })
            $('#table-laptop tbody').html(html);
      

      //分页条
      var html = '';
      html += `<li class="${pager.pno<=1?'disabled':''}"><a href="${pager.pno>1?pager.pno-1:'#'}">上一页</a></li>`;
      if(pager.pno-2>0){
        html += `<li><a href="${pager.pno-2}">${pager.pno-2}</a></li>`;
      }
      if(pager.pno-1>0){
        html += `<li><a href="${pager.pno-1}">${pager.pno-1}</a></li>`;
      }
      html += `<li class="active"><a href="${pager.pno}">${pager.pno}</a></li>`;
      if(pager.pno+1<=pager.pageCount){
        html += `<li><a href="${pager.pno+1}">${pager.pno+1}</a></li>`;
      }
      if(pager.pno+2<=pager.pageCount){
        html += `<li><a href="${pager.pno+2}">${pager.pno+2}</a></li>`;
      }
      html += `<li class="${pager.pno>=pager.pageCount?'disabled':''}"><a href="${pager.pno<pager.pageCount?pager.pno+1:'#'}">下一页</a></li>`;
      $('#pagination').html(html);
    }
  })
}
loadProductByPage(1, 10)

//隐藏手机中间四位
function slicephone(phone){
  var reg = /(\d{3})(\d{4})(\d{4})/;
  return phone.replace(reg,"$1****$3");
}

$("#table-laptop").on("click","[data-action='delete']",function(e){
  e.preventDefault();
  var lid = $(this).data("id");
  var td = $(this).parent();
  var tr = $(this).parents("tr");
  var fname = tr.find("[class='fname']");
  var rs = window.confirm("您确认要删除："+fname.html()+"对应记录吗?");
  if(!rs){
   return;
  }
  $.ajax({
    type:"post",
    url:"data/09_user_del.php",
    data:{lid:lid},
    success:function(data){
       if(data.code>0){
         alert("删除成功");
         tr.addClass("expire");
         td.html("");
       }else{
         alert("删除失败");
       }
    },
    error:function(){
      alert("网络故障请检查");
    }
  });
});


//更新用户密码
$("#table-laptop").on("click","[data-action='update']",function(e){
  e.preventDefault();
  var div = $(".update-jumbotron");
  $("[data-action='update-ok']").attr("data-lid",$(this).data("id"));
  var td = $(this).parent();
  var tr = $(this).parents("tr");
  var fname = tr.find("[class='fname']");
  var price = tr.find("[class='pprice']");
  div.find(".uname").html(fname.html());
  //div.find(".input-price").val(price.html().slice(1));
  div.show(500);
});

$("[data-action='update-ok']").click(function(e){
  e.preventDefault();
  var uid = $(this).attr("data-lid");
  var old_pwd = $(".old-pwd").val();
  var new_pwd = $(".new-pwd").val();
  if(old_pwd==""){
   alert("旧密码不能为空");
   return;
  }
  if(new_pwd==""){
    alert("新密码不能为空");
    return;
   }
 
  $.ajax({
    type:"POST",
    url:"data/11_user_update.php",
    data:{uid:uid,old_pwd:old_pwd,new_pwd:new_pwd},
    success:function(data){
        alert(data.msg);
        $(".update-jumbotron").hide();
    },
    error:function(){
      alert("network errror");
      $(".update-jumbotron").hide();
    }
  });
});

$("[data-action='update-cancel']").click(function(e){
  e.preventDefault();
  $(".update-jumbotron").hide(500);
});

$("#table-laptop").on("click","[data-action='detail']",function(e){
  e.preventDefault();
  var lid = $(this).data("id");
  $.ajax({
    type:"GET",
    data:{uid:lid},
    url:"data/12_user_detail.php",
    success:function(data){
      //console.log(data);
      var div = $(".detail-jumbotron");
      div.find(".uname").html(data.uname);
      div.find(".phone").html(data.phone);
      div.find(".user_name").html(data.user_name);
      //div.find(".pos").html(data.os);
      div.show(500);
      //console.log(div);
    },
    error:function(){
      alert("network error");
    }
  });
});

$("[data-action='detail-cancel']").click(function(){
  $(".detail-jumbotron").hide(500);
});
/*上传头像*/
/**
 *页面加载成功后执行代码
 * 阻止事件默认行为document,拖动离开，拖动释放，拖动进入，拖动悬停
 * 获取“拖拽区域”
 * 绑定事件拖动释放
 * 阻止事件默认行为
 * 获取文件对象
 * 获取拖动上传文件数量==0停止
 * 获取上传文件（第一张图片）类型
 * 阻止非图片
 * 创建预览对象
 *显示预览图片
 * 通过ajax对象上传文件
 * 创建ajax对象发送数据
 */
$(function(){
  $(document).on({
    dragleave:function(e){e.preventDefault();},//拖动离开
    drop:function(e){e.preventDefault();},    //释放
    dragenter:function(e){e.preventDefault();}, //进入
    dragover:function(e){e.preventDefault();}   //悬停
  });
  var drop_area = document.querySelector(".drop_area");
  drop_area.ondrop = function(e){
    e.preventDefault();
    var fileList = e.dataTransfer.files;
    if(fileList.length==0){
      alert("没有图片上传");
      return;
    }
    var rs = fileList[0].type.indexOf("image");
    if(rs==-1){
      alert("只能上传图片格式类型");
      return;
    }
    //获取上传图片大小判断
    var size = Math.floor(fileList[0].size/1024);
    if(size>800){
      alert("上传图片大小不能超过800K");
      return;
    }
    var fileName = fileList[0].name;
    var img = window.webkitURL.createObjectURL(fileList[0]);
    //console.log(img);
    var str = `<img src="${img}"/><p>${fileName}</p>`;
    $(".preview").html(str);
    var fd = new FormData();
    fd.append("mypic",fileList[0]);
    //获取上传对话框中用户编号，将uid添加FormData
    var uid = $(".upload-jumbotron").data("uid");
    fd.append("uid",uid);
    var xhr = new XMLHttpRequest();
    xhr.onreadystateChange = function(){
      if(xhr.readyState==4){
        if(xhr.status==200){
          var json = JSON.parse(xhr.responseText);
          if(json.code>0){
            alert(json.msg);
          }else{
            alert(json.msg);
          }
        }
      }
    }
    xhr.open("post","data/14_user_upload.php",true);
    xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
    xhr.send(fd);
  }
});
//为上传头像绑定单击事件
$("#tbody1").on("click","a.btn-upload",function(e){
  e.preventDefault();
  var uid = $(this).attr("href");
  $(".upload-jumbotron").data("uid",uid);
  $(".upload-jumbotron").show();
});
/**
*权限管理
 * 模块一：为指定用户添加角色
 * 添加按钮
 * 为按钮绑定事件
 * 发起ajax请求
 * 拼接字符串显示角色列表
 */
$("#tbody1").on("click","a.btn-role",function(e){
  e.preventDefault();
  var uid = $(this).attr("href");
  //当前操作用户名
  var uname = $(this).parents("tr").find(".uname").html();
  //将用户名保存"拥有角色对话框"
  $(".role_uname").html(uname);
  $.ajax({
    type:"GET",
    url:"data/15_role_list.php",
    success:function(data){
      var html = "";
      $.each(data,function(idx,obj){
        html +=`<li><input type="radio" value="${obj.id}" data-uid="${uid}" class="roles"/>${obj.rname}</li>`;
      })
     $("#roles").html(html);
    },
    error:function(){
      alert("网络故障请检查");
    }
  })
});
/**
 * 为指定用户添加角色
 * 获取所有单选按钮
 * 绑定事件
 * 获取第二个参数rid_uid
 * 发送ajax请求，并且获取返回结果
 * 依据结果判断若添加成功关闭“拥有角色对话框”
 */
$(".role-jumbotron").on("click",".roles",function(e){
  var uid = $(this).data("uid");
  var rid = $(this).val();
  $.ajax({
    type:"POST",
    url:"16_user_role_update.php",
    data:{uid:uid,rid:rid},
    success:function(data){
      if(data.code>0){
        alert("添加成功");
        $(".role-jumbotron").hide();
      }
    },
    error:function(){
      alert("网络故障请检查");
    }
  });
})