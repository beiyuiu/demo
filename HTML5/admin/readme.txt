ѧ���̳Ǻ�̨����
ģ��һ����̨����Ա��¼
1������PHP 01_login.php
    1�������ݿ��û�����ܴ���
    2��update xz_user set upwd=md5(upwd);
    3������SQL���
        select * from xz_user where uname=$uname upwd=md5('123456');
2������HTML index.html
3������js index.js

������ܴ���
1��mysql �Զ����� md5();���ַ�������  �ƽⷽʽ����ײ���ԣ��ʺ���Ϸ
2��PHP�������
3��js�������
4��ͨ������¼���һ�ο����������
    "123456"-->md5('123456');
5����μ���
    "123456"-->md5(md5('123456'));
6����ȫ�������
    sha2 �����㷨 512λ
    des �����㷨��������ҵ��
Canvas��ͼ��
    1��SVG ��ͼ��2Dʸ��ͼ���� ����H5��׼
    2��Canvas ��ͼ��2Dλͼ���� H5�����ͼ����
        canvas:������H5�ṩ2D��ͼ����;�������Ĭ��300*150��inline-block;���ֻ��ʹ��html/js���Ը�ֵ��������CSS��ʽ��ֵ
        <canvas width="500" height="400"></canvas>
        "����"����:
            var ctx=canvas.getContext("2d");
         ��λ�������Ͻǣ�
         ctx.lineWidth=1; ��߿�ȣ����ģ�
         ctx.fillStyle="#000" ������ʽ����ɫ��ʵ�ģ�
         ctx.strokeStyle="red"; �����ʽ�����ģ�
         һ���ı���
            ctx.textBaseline="top/bottom/alphabetic";
        �ı����ߣ�����ֱ���뷽ʽ��
        �������linearGradient
        ���򽥱䣺radialGradient
            1�������������
            var g = ctx.createLinearGradient(x1,y1,x2,y2);
            2��������ɫ��
            g.addColorStop(0,"#00f");
            g.addColorStop(0.5,"#f00");
            g.addColorStop(1,"#0f0");
            3�����������Ӧ�����������ʽ
            ctx.fillStyle = g;
            4�������λ��ı�
            ctx.fillRect(0,0,500,100);
    3��WebGL ��ͼ��3Dʸ��ͼ���� ��δ����H5��׼
