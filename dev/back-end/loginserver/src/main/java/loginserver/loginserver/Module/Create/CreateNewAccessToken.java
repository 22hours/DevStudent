package loginserver.loginserver.Module.Create;

import javax.crypto.spec.SecretKeySpec;
import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;

import io.jsonwebtoken.*;
import loginserver.loginserver.Module.SHA256K;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class CreateNewAccessToken implements CreateToken {
    @Autowired
    SHA256K sha256K;

    private String secretKey = "DevStudentJWTAuthTimeWithJeongHwanAndDaMinAndHyoBinAndJeongGu";
    private String hashSecretKey = "";
    @Override
    public String create(String nickname, String email, String ip) {
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
        //Date expireTime = new Date();
        //expireTime.setTime(expireTime.getTime() + 1000 * 60 * 60);
        hashSecretKey = sha256K.hashValueForSecret(secretKey + ip);
        byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(hashSecretKey);
        Key signingKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());
        Map<String, Object> headerMap = new HashMap<String, Object>();

        headerMap.put("typ","JWT");
        headerMap.put("alg","HS256");

        Map<String, Object> map= new HashMap<String, Object>();

        map.put("nickname", nickname);
        map.put("email", email);
        map.put("tokenState", "access");

        JwtBuilder builder = Jwts.builder().setHeader(headerMap)
                .setClaims(map)
                //.setExpiration(expireTime)
                .signWith(signatureAlgorithm, signingKey);

        return builder.compact();
    }

}
