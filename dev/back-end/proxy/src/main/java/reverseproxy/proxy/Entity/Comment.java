package reverseproxy.proxy.Entity;

import lombok.Getter;

import java.text.SimpleDateFormat;
import java.util.Date;

@Getter
public class Comment {
    private String _id; // 고유 number
    private String author;
    private String content;
    private String date;
}
