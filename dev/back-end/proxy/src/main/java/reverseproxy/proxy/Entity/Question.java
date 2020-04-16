package reverseproxy.proxy.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@ToString
@Setter
@Getter
public class Question {
    private String _id; // 고유 number
    private String title;
    private String author;
    private List<String> tags;
    private String date;
    private String content;
    private String previews = "";
    private int answerCount = 0;
    private int likesCount = 0;
    private int views = 1;
    private Boolean solved = false;
    private List<Comment> comments = new ArrayList<Comment>();
    private List<Answer> answers = new ArrayList<Answer>();
    private List<Like> likes = new ArrayList<Like>();

}