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
public class GetNicknameInToken {
    @Autowired
    private SHA256K sha256K;

    private String secretKey = "DevStudentJWTAuthTimeWithJeongHwanAndDaMinAndHyoBinAndJeongGu";
    private String hashSecretKey = "";

    public String getNicknameInToken(DataFetchingEnvironment env) {
        GraphQLContext context =  env.getContext();
        HttpServletRequest request = context.getHttpServletRequest().get();
        if(request.getHeader("Authorization") == null || request.getHeader("Authorization").equals("")){
            return null;
        }
        String jwt = request.getHeader("Authorization");
        String ip = request.getHeader("ip");
        hashSecretKey = sha256K.hashValueForSecret(secretKey + ip);
        try {
            Claims claims = Jwts.parser().setSigningKey(DatatypeConverter.parseBase64Binary(hashSecretKey))
                    .parseClaimsJws(jwt).getBody(); // 정상 수행된다면 해당 토큰은 정상토큰
            String tempNickname = claims.get("nickname").toString();
            return tempNickname;
        } catch (JwtException exception) {
            System.out.println("토큰 변조");
            return null;
        }
    }
}
