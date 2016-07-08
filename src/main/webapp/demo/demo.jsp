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
    <title>测试页面</title>
    <script src="${pageContext.request.contextPath}/base/thirdpart/jquery/jquery-3.0.0.js"></script>
    <script src="${pageContext.request.contextPath}/base/thirdpart/jquery/jquery.mousewheel.js"></script>
    <link href="${pageContext.request.contextPath}/base/plugin/wProgressBar/css/wProgressBar.css" rel="stylesheet">
    <script src="${pageContext.request.contextPath}/base/plugin/wStep/js/wStep.js"></script>
    <link href="${pageContext.request.contextPath}/base/plugin/wStep/css/wStep.css" rel="stylesheet">

</head>
<body>
<%--<canvas id = "myCanvas" width="1000" style="position: absolute;z-index: 0">Canvas画线技巧</canvas>--%>
<div style="width: 80%;max-height:200px;"></div>
<script>
  $(document).ready(function(){

//      var myCanvas = document.getElementById("myCanvas");
//      var context = myCanvas.getContext("2d");
//      context.strokeStyle = "rgba(0,0,0,0.5)"
//      context.fillStyle = "black"//设置填充颜色
//      context.moveTo(20, 30);//将画笔移到x0,y0处
//      context.lineTo(1000, 30);//从x0,y0到x1,y1画一条线
//      context.fill();//填充
//      context.stroke();//画线
//      context.beginPath() //清空子路径
//      context.closePath() //闭合路径

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
          isShowStepInfo:true,//是否显示步骤描述 默认不显示
          fontColor:"#34A7FA",//文字颜色
          circleColor:"#34A7FA",//圆圈颜色
          steps:[
              {
                  stepNum:"1",//步骤编号
                  stepInfo:"第一",//步骤描述
                  url:"",//点击步骤对应的url
                  isCur:true//是否是当前步骤
              },
              {
                  stepNum:"2",//步骤编号
                  stepInfo:"第二",//步骤描述
                  url:"",//点击步骤对应的url
                  isCur:false//是否是当前步骤
              },
              {
                  stepNum:"3",//步骤编号
                  stepInfo:"第三",//步骤描述
                  url:"",//点击步骤对应的url
                  isCur:false//是否是当前步骤
              },
              {
                  stepNum:"4",//步骤编号
                  stepInfo:"第四",//步骤描述
                  url:"",//点击步骤对应的url
                  isCur:false//是否是当前步骤
              }
          ]
      })

  });
</script>
</body>
</html>

