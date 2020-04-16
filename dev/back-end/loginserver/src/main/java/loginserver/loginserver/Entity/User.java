package loginserver.loginserver.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.text.SimpleDateFormat;
import java.util.Date;

@ToString
@Getter
@Setter
@Document(collection = "Users")
public class User {
    @Id
    private String email;
    private String password;
    private String nickname;
    private String schoolName;
    private String date;
    @Setter
    private String authState;
    @Setter
    private String accessToken;
//    @Setter
//    private String refreshToken;

    public User(String email, String password, String nickname, String schoolName, String authState) {
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.date = dayTime.format(new Date(time));
        this.password = password;
        this.nickname = nickname;
        this.email = email;
        this.schoolName = schoolName;
        this.authState = authState;
        this.accessToken = null;
//        this.refreshToken = null;
    }
}


