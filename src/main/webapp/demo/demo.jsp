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
  <script src="${pageContext.request.contextPath}/base/plugin/wProgressBar/js/wProgressBar.js"></script>

</head>
<body>

<div></div>
<script>
  $(document).ready(function(){
    $("div").wProgressBar({
      width:200,
      height:50,
      color:"red"
    });
  });
</script>
</body>
</html>

