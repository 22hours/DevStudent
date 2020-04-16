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
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import reverseproxy.proxy.Command.Security.SHA256K;

import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;

@Component
public abstract class ConnectMainServer {
    @Autowired
    private SHA256K sha256K;
    String url = "http://localhost:8090/graphql";
    private String secretKey = "DevStudentJWTAuthTimeWithJeongHwanAndDaMinAndHyoBinAndJeongGu";
    private String hashSecretKey = "";
    // 응답형이 단일일때
    public String getResponse(String query, String name) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-type", "application/graphql");
        ResponseEntity<String> response = restTemplate.postForEntity(url, new HttpEntity<>(query, headers), String.class);
        int size = name.length() + 2;
        String str = response.getBody();
        System.out.println(str);
        return str.substring(str.indexOf(name) + size, str.lastIndexOf('}') - 1);
    }

    // 응답형이 복수일때
    public String getResponse(String query) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-type", "application/graphql");
        ResponseEntity<String> response = restTemplate.postForEntity(url, new HttpEntity<>(query, headers), String.class);
        String str = response.getBody();
        return str.substring(str.indexOf('['), str.lastIndexOf(']') + 1);
    }
    public String checkJwt(String nickname, DataFetchingEnvironment env) throws Exception {
        GraphQLContext context =  env.getContext();
        HttpServletRequest request = context.getHttpServletRequest().get();
        if(request.getHeader("Authorization").equals(null)){
            return "invalidate";
        }
        String jwt = request.getHeader("Authorization");
        hashSecretKey = sha256K.hashValueForSecret(secretKey + nickname);
        try {
            Claims claims = Jwts.parser().setSigningKey(DatatypeConverter.parseBase64Binary(hashSecretKey))
                    .parseClaimsJws(jwt).getBody(); // 정상 수행된다면 해당 토큰은 정상토큰
            String tempNickname = claims.get("nickname").toString();
            String tokenState = claims.get("tokenState").toString();
            if(!tokenState.equals("access") || !tempNickname.equals(nickname)) return "invalidate";

            return "true";
        } catch (ExpiredJwtException exception) {
            System.out.println("토큰 만료");
            return "expired";
        } catch (JwtException exception) {
            System.out.println("토큰 변조");
            return "invalidate";
        }
    }
}
