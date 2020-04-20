package reverseproxy.proxy.Command.Security;

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
        String token = ((HttpServletRequest) request).getHeader("Authorization");
        String ip = httpServletRequest.getHeader("ip");
        System.out.println(ip);
        if(token != null && token != ""){
            System.out.println("굿");
            if(!checkJwt.checkJwt(token, ip)){
                System.out.println("야 시발 이거 문제있다");
                throw new AccessDeniedException("403");
            }
        }
        filterChain.doFilter(request, response);
    }
}