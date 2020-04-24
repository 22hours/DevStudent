package loginserver.loginserver.Module;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http
                .authorizeRequests()
                .anyRequest().permitAll();
    //.anyRequest().access("hasIpAddress('0:0:0:0:0:0:0:1') or hasIpAddress('172.30.1.26') or hasIpAddress('127.0.0.1')"); //로컬 호스트, 정구 ip : 나중에 수정 요망
    }



}
