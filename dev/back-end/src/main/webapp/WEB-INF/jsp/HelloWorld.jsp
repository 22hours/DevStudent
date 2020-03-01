<%--
  Created by IntelliJ IDEA.
  User: damin
  Date: 2020-02-27
  Time: 오후 10:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <form class="table-form">
        <fieldset>
            <legend class="hidden">공지사항 검색 필드</legend>
            <label class="hidden">검색분류</label> <select name="field">
            <option ${(param.field == "title")?"selected":"" } value="title">제목</option>
            <option ${(param.field == "title_content")?"selected":"" }
                    value="title_content">제목 + 내용</option>
            <option ${(param.field == "content")?"selected":"" }
                    value="content">내용</option>
            <option ${(param.field == "wirter_id")?"selected":"" }
                    value="wirter_id">작성자</option>
        </select> <label class="hidden">검색어</label> <input type="text" name="query"
                                                           value="${param.query }" /> <input class="btn btn-search"
                                                                                         type="submit" value="찾기" />
        </fieldset>
    </form>
</body>
</html>
