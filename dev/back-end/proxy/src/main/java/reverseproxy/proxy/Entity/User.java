package reverseproxy.proxy.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.text.SimpleDateFormat;
import java.util.Date;

@ToString
@Getter
public class User {
    private String email = null;
    private String password = null;
    private String nickname = null;
    private String schoolName = null;
    private String date = null;
    @Setter
    private String authState = null;
    @Setter
    private String token = null;
    public User(String email){
        this.email = email;
    }

}


