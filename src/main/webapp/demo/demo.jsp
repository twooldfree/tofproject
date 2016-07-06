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
    <link href="${pageContext.request.contextPath}/base/plugin/wProgressBar/css/wProgressBar.css" rel="stylesheet">
    <script src="${pageContext.request.contextPath}/base/plugin/wStep/js/wStep.js"></script>
    <link href="${pageContext.request.contextPath}/base/plugin/wStep/css/wStep.css" rel="stylesheet">

</head>
<body>

<div></div>
<script>
  $(document).ready(function(){
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
          radius:15,
          stepNum:"1",//步骤编号
          url:"",//点击步骤对应的url
          isCur:true,//是否是当前步骤
          isShowStepInfo:true,//是否显示步骤描述 默认不显示
          stepInfo:"",//步骤描述
          fontColor:"blue",//文字颜色
          circleColor:"blue"//圆圈颜色
      })

  });
</script>
</body>
</html>

