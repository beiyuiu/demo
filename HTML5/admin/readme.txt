学子商城后台管理
模块一：后台管理员登录
1、创建PHP 01_login.php
    1、将数据库用户表加密处理
    2、update xz_user set upwd=md5(upwd);
    3、分析SQL语句
        select * from xz_user where uname=$uname upwd=md5('123456');
2、创建HTML index.html
3、创建js index.js

密码加密处理：
1、mysql 自动加密 md5();将字符串加密  破解方式：碰撞测试；彩虹游戏
2、PHP程序加密
3、js程序加密
4、通常情况下加密一次可以完成任务
    "123456"-->md5('123456');
5、多次加密
    "123456"-->md5(md5('123456'));
6、安全级别过高
    sha2 加密算法 512位
    des 加密算法（金融行业）
Canvas绘图：
    1、SVG 绘图：2D矢量图技术 纳入H5标准
    2、Canvas 绘图：2D位图技术 H5提出绘图技术
        canvas:画布，H5提供2D绘图技术;在浏览器默认300*150的inline-block;宽高只能使用html/js属性赋值，不能用CSS样式赋值
        <canvas width="500" height="400"></canvas>
        "画笔"对象:
            var ctx=canvas.getContext("2d");
         定位点在左上角；
         ctx.lineWidth=1; 描边宽度（空心）
         ctx.fillStyle="#000" 填充的样式、颜色（实心）
         ctx.strokeStyle="red"; 描边样式（空心）
         一段文本：
            ctx.textBaseline="top/bottom/alphabetic";
        文本基线：（垂直对齐方式）
        渐变对象：linearGradient
        径向渐变：radialGradient
            1、创建渐变对象
            var g = ctx.createLinearGradient(x1,y1,x2,y2);
            2、设置颜色点
            g.addColorStop(0,"#00f");
            g.addColorStop(0.5,"#f00");
            g.addColorStop(1,"#0f0");
            3、将渐变对象应用填充或描边形式
            ctx.fillStyle = g;
            4、画矩形画文本
            ctx.fillRect(0,0,500,100);
    3、WebGL 绘图：3D矢量图技术 尚未纳入H5标准
