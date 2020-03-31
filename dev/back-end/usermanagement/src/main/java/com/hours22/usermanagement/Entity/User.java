package com.hours22.usermanagement.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@ToString
@Setter
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
    private String authState;

    public User(String _id, String password, String nickName, String email, String schoolName, String date, String authState) {
        this._id = _id;
        this.password = password;
        this.nickName = nickName;
        this.email = email;
        this.schoolName = schoolName;
        this.date = date;
        this.authState = authState;
    }
}


