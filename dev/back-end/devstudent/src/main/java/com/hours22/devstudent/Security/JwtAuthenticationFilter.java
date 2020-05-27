package com.hours22.devstudent.Security;

import org.springframework.http.HttpHeaders;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.nio.file.AccessDeniedException;

public class JwtAuthenticationFilter extends GenericFilterBean {

    private CheckJwt checkJwt;

    public JwtAuthenticationFilter(CheckJwt checkJwt){
        this.checkJwt = checkJwt;
    }
    // Request로 들어오는 Jwt Token의 유효성을 검증(jwtTokenProvider.validateToken)하는 filter를 filterChain에 등록합니다.
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        System.out.println("ip 테스트용 Start");
        System.out.println(request.getRemoteAddr().toString());
        System.out.println("ip 테스트용 End");
        String token = ((HttpServletRequest) request).getHeader("authorization");
        String ip = httpServletRequest.getHeader("ip");
        System.out.println(ip);
        if(token != null && !token.equals("") && !token.equals("guest")){
            if(!checkJwt.checkJwt(token, ip)){
                System.out.println("Problem Occured!");
                throw new AccessDeniedException("403");
            }
        }
        System.out.println("No Error");
        filterChain.doFilter(request, response);
    }
}

