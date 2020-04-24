package loginserver.loginserver.Module.Check;

import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Module.AuthMailSend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CheckEmail {
    @Autowired
    private AuthMailSend authMailSend;
    public String checkEmail(String email){
        String genKey = authMailSend.authMailSend(email);
        if (genKey.equals("error")) {
            return "mail error";
        }
        return genKey;
    }
}
