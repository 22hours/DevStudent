package loginserver.loginserver.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@ToString
@Getter
@Setter
@Document(collection = "UserInfo")
public class UserInfo {
    private String email = null;
    @Id
    private String nickname = null;
    private int point = 0;
    private String grade = "bean";
    private String gitLink = null;
    private String schoolName = null;
    private boolean attendance = false;

    public UserInfo(String email, String nickname, String schoolName){
        this.email = email;
        this.nickname = nickname;
        this.schoolName = schoolName;
    }
}
