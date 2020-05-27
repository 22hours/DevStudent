package com.hours22.devstudent.Entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.TextScore;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@ToString
@Setter
@Getter
@Document(collection = "QuestionScores")
public class QuestionScore {
    @Id
    private String _id; // 고유 number
    private String title;
    @Setter
    @DBRef
    private UserInfo author;

    private List<String> tags;
    private String date;
    private String content;
    private String previews = "";
    private int answerCount = 0;
    private int likesCount = 0;
    private String isLiked = "none";
    private int views = 1;
    private String adoptedAnswerId = null;
    private List<Comment> comments = new ArrayList<Comment>();
    private List<Answer> answers = new ArrayList<Answer>();
    private List<Like> likes = new ArrayList<Like>();
    @TextScore
    private Float score;


    public QuestionScore(String _id, String title, UserInfo author, List<String> tags, String content, String previews) {
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