package com.hours22.devstudent.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.text.SimpleDateFormat;
import java.util.Date;

@ToString
@Getter
@Document(collection = "Alarms")
public class Alarm {
    @Id
    private String _id;
    private String question_id;
    private String nickname;
    private String respondent;
    private String content;
    private String date;
    @Setter
    private Boolean read;
    public Alarm(String _id, String question_id, String nickname, String respondent, String content){
        this._id = _id;
        this.question_id = question_id;
        this.nickname = nickname;
        this.respondent = respondent;
        this.content = content;
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.date = dayTime.format(new Date(time));
        this.read = false;
    }
}
