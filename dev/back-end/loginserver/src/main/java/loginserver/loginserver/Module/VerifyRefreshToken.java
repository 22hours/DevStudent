package loginserver.loginserver.Module;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.xml.bind.DatatypeConverter;

@Component
public class VerifyRefreshToken {
    private String secretKey = "WeAreFancyDevStudentThisIsKoreanTraditionalLifeTogetherJeongHwanAndDaMinAndHyoBinAndJeongGu";
    private String hashSecretKey = "";

    @Autowired
    SHA256K sha256K;

    public String verifyRefreshToken(String jwt, String nickname, String email) {
        hashSecretKey = sha256K.hashValueForSecret(secretKey + nickname);
        try {
            Claims claims = Jwts.parser().setSigningKey(DatatypeConverter.parseBase64Binary(hashSecretKey))
                    .parseClaimsJws(jwt).getBody(); // 정상 수행된다면 해당 토큰은 정상토큰
            if(!claims.get("tokenState").equals("refresh"))
                return "refreshToken inconsistency";
            if(!email.equals(claims.get("email")))
                return "Email inconsistency";
            if(!nickname.equals(claims.get("nickname")))
                return "Nickname inconsistency";
            return "Safe";
        } catch (ExpiredJwtException exception) {
            System.out.println("토큰 만료");
            return "Token expiration";
        } catch (JwtException exception) {
            System.out.println("토큰 변조");
            return "Token modulation";
        }
    }
}
