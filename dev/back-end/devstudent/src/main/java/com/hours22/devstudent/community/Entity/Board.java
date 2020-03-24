package com.hours22.devstudent.community.Entity;

import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@ToString
@Getter
@Document(collection = "Boards")
public class Board {

    @Id
    private int _id; // 고유 number
    private String title;
    private String author;
    private List<String> tags;
    private String date;
    private String content;
    private List<Comment> comments = null;
    private List<Answer> answers = null;
    private int answerCount = 0;
    private int views = 1;
    private Boolean solved = false;

    public Board(int _id, String title, String author, List<String> tags, String date, String content) {
        this._id = _id;
        this.title = title;
        this.author = author;
        this.tags = tags;
        this.date = date;
        this.content = content;
    }
}
