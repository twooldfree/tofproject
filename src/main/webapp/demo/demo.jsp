<%--
  Created by IntelliJ IDEA.
  User: wen
  Date: 2016/7/1
  Time: 14:52
  To change this template use File | Settings | File Templates.
--%>
<meta http-equiv="Content-Type" content="text/html; charset=GBK" />
<%@ page contentType="text/html;charset=GBK" language="java" pageEncoding="GBK" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>����ҳ��</title>
    <script src="${pageContext.request.contextPath}/base/thirdpart/jquery/jquery-3.0.0.js"></script>
    <script src="${pageContext.request.contextPath}/base/thirdpart/jquery/jquery.mousewheel.js"></script>
    <link href="${pageContext.request.contextPath}/base/plugin/wProgressBar/css/wProgressBar.css" rel="stylesheet">
    <script src="${pageContext.request.contextPath}/base/plugin/wStep/js/wStep.js"></script>
    <link href="${pageContext.request.contextPath}/base/plugin/wStep/css/wStep.css" rel="stylesheet">

</head>
<body>
<%--<canvas id = "myCanvas" width="1000" style="position: absolute;z-index: 0">Canvas���߼���</canvas>--%>
<div style="width: 80%;max-height:200px;"></div>
<script>
  $(document).ready(function(){

//      var myCanvas = document.getElementById("myCanvas");
//      var context = myCanvas.getContext("2d");
//      context.strokeStyle = "rgba(0,0,0,0.5)"
//      context.fillStyle = "black"//���������ɫ
//      context.moveTo(20, 30);//�������Ƶ�x0,y0��
//      context.lineTo(1000, 30);//��x0,y0��x1,y1��һ����
//      context.fill();//���
//      context.stroke();//����
//      context.beginPath() //�����·��
//      context.closePath() //�պ�·��

    <%--$("div").wProgressBar({--%>
<%--//      processnum:0.3,--%>
      <%--width:100,--%>
      <%--height:20,--%>
<%--//      color:"#32A4F7",--%>
      <%--url:"${pageContext.request.contextPath}/reDraw.do",--%>
      <%--isAutoRefresh:true,--%>
      <%--rate:5--%>
    <%--});--%>

      $("div").wStep({
          radius:14,
          isShowStepInfo:true,//�Ƿ���ʾ�������� Ĭ�ϲ���ʾ
          fontColor:"#34A7FA",//������ɫ
          circleColor:"#34A7FA",//ԲȦ��ɫ
          steps:[
              {
                  stepNum:"1",//������
                  stepInfo:"��һ",//��������
                  url:"",//��������Ӧ��url
                  isCur:true//�Ƿ��ǵ�ǰ����
              },
              {
                  stepNum:"2",//������
                  stepInfo:"�ڶ�",//��������
                  url:"",//��������Ӧ��url
                  isCur:false//�Ƿ��ǵ�ǰ����
              },
              {
                  stepNum:"3",//������
                  stepInfo:"����",//��������
                  url:"",//��������Ӧ��url
                  isCur:false//�Ƿ��ǵ�ǰ����
              },
              {
                  stepNum:"4",//������
                  stepInfo:"����",//��������
                  url:"",//��������Ӧ��url
                  isCur:false//�Ƿ��ǵ�ǰ����
              }
          ]
      })

  });
</script>
</body>
</html>

