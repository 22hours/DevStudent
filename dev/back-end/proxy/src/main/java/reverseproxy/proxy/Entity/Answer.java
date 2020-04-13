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
    private String _id; // 고유 number
    private String author;
    private String content;
    private String date;
    @Setter
    private int likesCount = 0;
    @Setter
    private List<Comment> comments = new ArrayList<Comment>();
    @Setter
    private List<Like> likes = new ArrayList<Like>();
}