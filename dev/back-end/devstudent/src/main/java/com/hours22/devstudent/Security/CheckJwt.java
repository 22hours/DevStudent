package com.hours22.devstudent.Security;


import javax.crypto.spec.SecretKeySpec;
import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;

import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CheckJwt {
    @Autowired
    private SHA256K sha256K;
    private String secretKey = "DevStudentJWTAuthTimeWithJeongHwanAndDaMinAndHyoBinAndJeongGu";
    private String hashSecretKey = "";

    public Boolean checkJwt(String token, String ip) {
        hashSecretKey = sha256K.hashValueForSecret(secretKey + ip);
        System.out.println(token);
        System.out.println("위는 토큰");
        try {
            Claims claims = Jwts.parser().setSigningKey(DatatypeConverter.parseBase64Binary(hashSecretKey))
                    .parseClaimsJws(token).getBody(); // 정상 수행된다면 해당 토큰은 정상토큰
            String tokenState = claims.get("tokenState").toString();
            if(!tokenState.equals("access")) return false; // invalidate

            return true; // true
        } catch (ExpiredJwtException exception) {
            System.out.println("토큰 만료");
            return false;
        } catch (JwtException exception) {
            System.out.println();
            System.out.println();
            System.out.println("토큰 변조 log");
            System.out.println(exception.toString());
            System.out.println("토큰 변조 log end");
            System.out.println();
            System.out.println();
            return false; // invalidate
        }
    }
}