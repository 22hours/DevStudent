package reverseproxy.proxy.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
public class UserInfo {
    private String email = null;
    private String nickname = null;
    private int point = 0;
    private String grade = null;
    private String gitLink = null;
    private String schoolName = null;
    private boolean attendance = false;
}