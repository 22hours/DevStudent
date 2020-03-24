package com.hours22.devstudent.community.Entity;

import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Getter
@ToString
public class Comment {
    @Id
    private int _id;
    private String author;
    private String content;
    private Date date;

    public Comment(int _id, String author, String content, Date date) {
        this._id = _id;
        this.author = author;
        this.content = content;
        this.date = date;
    }
}
