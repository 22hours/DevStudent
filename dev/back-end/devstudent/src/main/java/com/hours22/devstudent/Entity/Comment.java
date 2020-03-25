package com.hours22.devstudent.Entity;

import org.springframework.data.annotation.Id;

public class Comment {
    @Id
    private String _id; // 고유 number
    private String author;
    private String content;
    private String date;
    public Comment(String _id, String author, String content, String date){
        this._id = _id;
        this.author = author;
        this.content = content;
        this.date = date;
    }
}
