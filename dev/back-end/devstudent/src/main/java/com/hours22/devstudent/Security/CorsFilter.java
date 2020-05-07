//package com.hours22.devstudent.Security;
//
//import org.springframework.web.filter.GenericFilterBean;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.nio.file.AccessDeniedException;
//
//
//public class CorsFilter extends GenericFilterBean {
//
//    @Override
//    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
//
//
//        HttpServletResponse response = (HttpServletResponse) servletResponse;
//        HttpServletRequest request= (HttpServletRequest) servletRequest;
//        response.setHeader("Access-Control-Allow-Origin", "*");
//        response.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
//        response.setHeader("Access-Control-Allow-Headers", "*");
//        response.setHeader("Access-Control-Allow-Credentials", true);
//        response.setHeader("Access-Control-Max-Age", 180);
//        filterChain.doFilter(servletRequest, servletResponse);
//
//
//        System.out.println("ip 테스트용 Start");
//        System.out.println(request.getRemoteAddr().toString());
//        System.out.println("ip 테스트용 End");
//        String token = ((HttpServletRequest) request).getHeader("Authorization");
//        String ip = httpServletRequest.getHeader("ip");
//        System.out.println(ip);
//        if(token != null && token != ""){
//            System.out.println("굿");
//            if(!checkJwt.checkJwt(token, ip)){
//                System.out.println("야 시발 이거 문제있다");
//                throw new AccessDeniedException("403");
//            }
//        }
//        filterChain.doFilter(request, response);
//    }
//}