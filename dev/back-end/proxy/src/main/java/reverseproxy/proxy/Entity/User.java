package reverseproxy.proxy.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.text.SimpleDateFormat;
import java.util.Date;

@ToString
@Getter
public class User {
    private String email;
    private String password;
    private String nickname;
    private String schoolName;
    private String date;
    @Setter
    private String authState;
    @Setter
    private String token;
}


