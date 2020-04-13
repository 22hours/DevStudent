package reverseproxy.proxy.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.text.SimpleDateFormat;
import java.util.Date;

@ToString
@Getter
public class Alarm {
    private String _id;
    private String question_id;
    private String nickname;
    private String respondent;
    private String content;
    private String date;
    @Setter
    private Boolean read;
}
