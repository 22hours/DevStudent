package reverseproxy.proxy.Command.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private CheckJwt checkJwt;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.httpBasic().disable();
        http
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // jwt token으로 인증하므로 세션은 필요없으므로 생성안함.
                .and()
                .authorizeRequests()
                .anyRequest().permitAll()
                //.anyRequest().access("hasIpAddress('13.209.25.45') or hasIpAddress('0:0:0:0:0:0:0:1') or hasIpAddress('127.0.0.1')")//로컬 호스트, 정구 ip : 나중에 수정 요망
                .and()//http://13.209.25.45/
                .addFilterAfter(new JwtAuthenticationFilter(checkJwt), UsernamePasswordAuthenticationFilter.class);
        System.out.println("와우!");
    }
}
