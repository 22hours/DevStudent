package reverseproxy.proxy.GraphQLMainServer;

import graphql.schema.DataFetchingEnvironment;
import graphql.servlet.GraphQLContext;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import reverseproxy.proxy.Command.Security.SHA256K;

import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;
import java.nio.charset.Charset;

@Component
public abstract class ConnectMainServer {
    @Autowired
    private SHA256K sha256K;
    String url = "http://192.168.43.25:8090/graphql";
    private String secretKey = "DevStudentJWTAuthTimeWithJeongHwanAndDaMinAndHyoBinAndJeongGu";
    private String hashSecretKey = "";
    // 응답형이 단일일때
    public String getResponse(String query, String name) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getMessageConverters().add(0, new StringHttpMessageConverter(Charset.forName("UTF-8")));
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-type", "application/graphql");
        headers.add("EncodingType","utf-8");
        ResponseEntity<String> response = restTemplate.postForEntity(url, new HttpEntity<>(query, headers), String.class);
        int size = name.length() + 2;
        String str = response.getBody();
        System.out.println(str);
        return str.substring(str.indexOf(name) + size, str.lastIndexOf('}') - 1);
    }

    // 응답형이 복수일때
    public String getResponse(String query) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getMessageConverters().add(0, new StringHttpMessageConverter(Charset.forName("UTF-8")));
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-type", "application/graphql");
        headers.add("EncodingType","utf-8");
        ResponseEntity<String> response = restTemplate.postForEntity(url, new HttpEntity<>(query, headers), String.class);
        String str = response.getBody();
        return str.substring(str.indexOf('['), str.lastIndexOf(']') + 1);
    }
}
