package reverseproxy.proxy.GraphQLMainServer;

import com.google.gson.JsonObject;
import graphql.schema.DataFetchingEnvironment;
import graphql.servlet.GraphQLContext;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import reverseproxy.proxy.Command.Security.SHA256K;

import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;
import java.nio.charset.Charset;

@Component
public abstract class ConnectMainServer {
    @Autowired
    private SHA256K sha256K;
    String url = "http://localhost:8090/main";
    private String secretKey = "DevStudentJWTAuthTimeWithJeongHwanAndDaMinAndHyoBinAndJeongGu";
    private String hashSecretKey = "";
    public String getResponse(String addURL, JsonObject json) { //POST
        System.out.println(url+addURL);
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getMessageConverters().add(0, new StringHttpMessageConverter(Charset.forName("UTF-8")));
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-type", "application/json");
        headers.add("EncodingType","UTF-8");
        HttpEntity<String> entity = new HttpEntity<String>(json.toString(), headers);
        ResponseEntity<String> response = restTemplate.exchange(url+addURL, HttpMethod.POST, entity, String.class);
        return response.getBody();
    }
    public String getResponse(UriComponentsBuilder builder){ //GET
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getMessageConverters().add(0, new StringHttpMessageConverter(Charset.forName("UTF-8")));
        System.out.println(builder.toUriString());
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-type", "application/json");
        headers.add("EncodingType","UTF-8");
        HttpEntity<?> entity = new HttpEntity<>(headers);
        HttpEntity<String> response = restTemplate.exchange(
                builder.toUriString(),
                HttpMethod.GET,
                entity,
                String.class);
        return response.getBody();
    }
}
