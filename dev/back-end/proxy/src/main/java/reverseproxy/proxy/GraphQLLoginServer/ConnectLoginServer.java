package reverseproxy.proxy.GraphQLLoginServer;

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
import org.springframework.web.client.RestTemplate;
import reverseproxy.proxy.Command.Security.SHA256K;

import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;
import java.nio.charset.Charset;


public abstract class ConnectLoginServer {


    public String getResponse(String query, String name) {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8100/graphql";
        restTemplate.getMessageConverters().add(0, new StringHttpMessageConverter(Charset.forName("UTF-8")));
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-type", "application/graphql");
        headers.add("EncodingType","utf-8");
        ResponseEntity<String> response = restTemplate.postForEntity(url, new HttpEntity<>(query, headers), String.class);
        int size = name.length() + 2;
        String str = response.getBody();
        return str.substring(str.indexOf(name) + size, str.lastIndexOf('}') - 1);
    }


}
