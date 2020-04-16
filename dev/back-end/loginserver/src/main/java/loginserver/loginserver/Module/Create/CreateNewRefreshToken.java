package loginserver.loginserver.Module.Create;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import loginserver.loginserver.Module.SHA256K;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class CreateNewRefreshToken implements CreateToken {
    @Autowired
    SHA256K sha256K;

    private String secretKey = "WeAreFancyDevStudentThisIsKoreanTraditionalLifeTogetherJeongHwanAndDaMinAndHyoBinAndJeongGu";
    private String hashSecretKey = "";
    @Override
    public String create(String nickname, String email) {
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
        Date expireTime = new Date();
        expireTime.setTime(expireTime.getTime() + 1000 * 60 * 60 * 24 *14);
        hashSecretKey = sha256K.hashValueForSecret(secretKey + nickname);
        byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(hashSecretKey);
        Key signingKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());
        Map<String, Object> headerMap = new HashMap<String, Object>();

        headerMap.put("typ","JWT");
        headerMap.put("alg","HS256");

        Map<String, Object> map= new HashMap<String, Object>();

        map.put("nickname", nickname);
        map.put("email", email);
        map.put("tokenState", "refresh");

        JwtBuilder builder = Jwts.builder().setHeader(headerMap)
                .setClaims(map)
                .setExpiration(expireTime)
                .signWith(signatureAlgorithm, signingKey);

        return builder.compact();
    }
}
