package com.hours22.devstudent.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@ToString
@Setter
@Getter
@Document(collection = "Questions")
public class Question {
    @Id
    private String _id; // 고유 number
    private String title;
    private String author;
    private List<String> tags;
    private String date;
    private String content;
    private String previews="";
    private int answerCount = 0;
    private int views = 1;
    private Boolean solved = false;
    private List<Comment> comments = new ArrayList<Comment>();
    private List<Answer> answers = new ArrayList<Answer>();

    public Question(String _id, String title, String author, List<String> tags, String content, String previews) {
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.date = dayTime.format(new Date(time));
        this._id = _id;
        this.title = title;
        this.author = author;
        this.tags = tags;
        this.content = content;
        this.previews = previews;
    }
}