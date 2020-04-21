package com.hours22.devstudent.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@ToString
@Getter
public class Answer {
    @Id
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

    public Answer(String _id, String author, String content) {
        this._id = _id;
        this.author = author;
        this.content = content;
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy년MM월dd일 HH시mm분ss초");
        this.date = dayTime.format(new Date(time));
    }
}