package com.hours22.devstudent.Security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.xml.bind.DatatypeConverter;

@Component
public class GetNicknameInToken {
    @Autowired
    private SHA256K sha256K;

    private String secretKey = "DevStudentJWTAuthTimeWithJeongHwanAndDaMinAndHyoBinAndJeongGu";
    private String hashSecretKey = "";

    public String getNicknameInToken(String token, String ip) {
        if(token == null || token.equals("") || token.equals("guest")){
            return null;
        }
        hashSecretKey = sha256K.hashValueForSecret(secretKey + ip);
        try {
            Claims claims = Jwts.parser().setSigningKey(DatatypeConverter.parseBase64Binary(hashSecretKey))
                    .parseClaimsJws(token).getBody(); // 정상 수행된다면 해당 토큰은 정상토큰
            String tempNickname = claims.get("nickname").toString();
            return tempNickname;
        } catch (JwtException exception) {
            System.out.println("토큰 변조");
            return null;
        }
    }
}
