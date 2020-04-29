package reverseproxy.proxy.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@ToString
@Getter
public class Answer {
    private String _id = null; // 고유 number
    private UserInfo author = null;
    private String content = null;
    private String date = null;
    @Setter
    private int likesCount = 0;
    @Setter
    private String isLiked = null;
    @Setter
    private List<Comment> comments = new ArrayList<Comment>();
    @Setter
    private List<Like> likes = new ArrayList<Like>();
    public Answer(String _id){
        this._id = _id;
    }
}