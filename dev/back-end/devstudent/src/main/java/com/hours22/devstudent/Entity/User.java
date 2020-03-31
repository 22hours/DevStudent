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
@Document(collection = "Users")
public class User {
    @Id
    private String _id; // 고유 number
    private String password;
    private String nickName;
    private String email;
    private String schoolName;
    private String date;
    @Setter
    private String authState;

    public User(String _id, String password, String nickName, String email, String schoolName, String authState) {
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.date = dayTime.format(new Date(time));
        this._id = _id;
        this.password = password;
        this.nickName = nickName;
        this.email = email;
        this.schoolName = schoolName;
        this.authState = authState;
    }
}


