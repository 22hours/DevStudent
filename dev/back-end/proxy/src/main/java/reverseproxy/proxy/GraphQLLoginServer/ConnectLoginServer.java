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
import org.springframework.web.client.RestTemplate;
import reverseproxy.proxy.Command.Security.SHA256K;

import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;


public abstract class ConnectLoginServer {
    @Autowired
    private SHA256K sha256K;

    private String secretKey = "DevStudentJWTAuthTimeWithJeongHwanAndDaMinAndHyoBinAndJeongGu";
    private String hashSecretKey = "";

    public String getResponse(String query, String name) {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8100/graphql";
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-type", "application/graphql");
        ResponseEntity<String> response = restTemplate.postForEntity(url, new HttpEntity<>(query, headers), String.class);
        int size = name.length() + 2;
        String str = response.getBody();
        return str.substring(str.indexOf(name) + size, str.lastIndexOf('}') - 1);
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
