package reverseproxy.proxy.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.text.SimpleDateFormat;
import java.util.Date;

@ToString
@Getter
public class Alarm {
    private String _id = null;
    private String question_id = null;
    private String nickname = null;
    private String respondent = null;
    private String content = null;
    private String date = null;
    @Setter
    private Boolean read = null;
    public Alarm(String _id){
        this._id = _id;
    }

}
