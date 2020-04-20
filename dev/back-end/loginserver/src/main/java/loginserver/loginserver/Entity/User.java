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
    private String email = null;
    private String password = null;
    private String nickname = null;
    private String schoolName = null;
    private String date = null;
    @Setter
    private String authState = null;
    @Setter
    private String accessToken = null;
    @Setter
    private String gitLink = null;
    @Setter
    private String grade = "bean";
    @Setter
    private int point = 0;
//    @Setter
//    private String refreshToken;

    public User(String email, String password, String nickname, String schoolName) {
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.date = dayTime.format(new Date(time));
        this.password = password;
        this.nickname = nickname;
        this.email = email;
        this.schoolName = schoolName;
        this.accessToken = null;
    }
    public User(String email, String nickname){ // Dummy User용 생성자
        this.email = email;
        this.nickname = nickname;
    }
    public User(){

    }
}


