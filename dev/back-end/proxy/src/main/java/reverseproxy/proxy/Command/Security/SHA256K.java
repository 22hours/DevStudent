package reverseproxy.proxy.Command.Security;

import java.math.BigInteger;
import java.security.MessageDigest;
import org.springframework.stereotype.Component;

@Component
public class SHA256K {
    public String hashValueForSecret(String str){
        String toReturn = null;
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            digest.reset();
            digest.update(str.getBytes("utf8"));
            toReturn = String.format("%064x", new BigInteger(1, digest.digest()));
        } catch (Exception e) {
            e.printStackTrace();
        }

        return toReturn;
    }
}