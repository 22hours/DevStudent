package com.hours22.devstudent.Entity;

import org.springframework.data.annotation.Id;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Comment {
    @Id
    private String _id; // 고유 number
    private String author;
    private String content;
    private String date;
    public Comment(String _id, String author, String content){
        this._id = _id;
        this.author = author;
        this.content = content;
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        this.date = dayTime.format(new Date(time));
    }
}
