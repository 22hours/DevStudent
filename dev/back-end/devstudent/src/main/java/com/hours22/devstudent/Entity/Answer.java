package com.hours22.devstudent.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@ToString
@Getter
public class Answer {
    @Id
    private String _id; // 고유 number

    @DBRef
    @Setter
    private UserInfo author;

    private String content;
    private String date;
    @Setter
    private int likesCount = 0;
    @Setter
    private String isLiked = "none";
    @Setter
    private List<Comment> comments = new ArrayList<Comment>();
    @Setter
    private List<Like> likes = new ArrayList<Like>();

    public Answer(String _id, UserInfo author, String content) {
        this._id = _id;
        this.author = author;
        this.content = content;
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.date = dayTime.format(new Date(time));
    }
}