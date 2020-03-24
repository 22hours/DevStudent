package com.hours22.devstudent.community.Entity;

import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@ToString
@Getter
public class Answer {
    @Id
    private int _id; // 고유 number
    private int parentID;
    private String author;
    private String content;
    private Date date;
    private List<Comment> comments;

    public Answer(int parentID, int _id ,String author, String content, Date date, List<Comment> comments) {
        this.parentID = parentID;
        this._id = _id;
        this.author = author;
        this.content = content;
        this.date = date;
        this.comments = comments;
    }
}
