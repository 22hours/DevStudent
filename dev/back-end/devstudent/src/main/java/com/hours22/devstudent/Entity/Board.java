package com.hours22.devstudent.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@ToString
@Setter
@Getter
@Document(collection = "Boards")
public class Board {
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

    public Board(String _id, String title, String author, List<String> tags, String date, String content, String previews) {
        this._id = _id;
        this.title = title;
        this.author = author;
        this.tags = tags;
        this.date = date;
        this.content = content;
        this.previews = previews;
    }
}