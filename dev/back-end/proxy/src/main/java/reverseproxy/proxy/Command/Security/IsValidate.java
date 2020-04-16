package reverseproxy.proxy.Command.Security;

import graphql.schema.DataFetchingEnvironment;
import graphql.servlet.GraphQLContext;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Count;

import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;

@Component
public class IsValidate {
    @Autowired
    private SHA256K sha256K;

    private String secretKey = "DevStudentJWTAuthTimeWithJeongHwanAndDaMinAndHyoBinAndJeongGu";
    private String hashSecretKey = "";

    public Count isValidate(String nickname, DataFetchingEnvironment env) throws Exception {
        GraphQLContext context =  env.getContext();
        HttpServletRequest request = context.getHttpServletRequest().get();
        if(request.getHeader("Authorization").equals(null)){
            return new Count(-1); // invalidate
        }
        String jwt = request.getHeader("Authorization");
        hashSecretKey = sha256K.hashValueForSecret(secretKey + nickname);
        try {
            Claims claims = Jwts.parser().setSigningKey(DatatypeConverter.parseBase64Binary(hashSecretKey))
                    .parseClaimsJws(jwt).getBody(); // 정상 수행된다면 해당 토큰은 정상토큰
            String tempNickname = claims.get("nickname").toString();
            String tokenState = claims.get("tokenState").toString();
            if(!tokenState.equals("access") || !tempNickname.equals(nickname)) return new Count(-1); // invalidate

            return new Count(0); // true
        } catch (ExpiredJwtException exception) {
            System.out.println("토큰 만료");
            return new Count(-2); // expired
        } catch (JwtException exception) {
            System.out.println("토큰 변조");
            return new Count(-1); // invalidate
        }
    }
}
