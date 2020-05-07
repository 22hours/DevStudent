package com.hours22.devstudent.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.text.SimpleDateFormat;
import java.util.Date;
@ToString
@Getter
@Setter
public class Like {
    String nickname;
    String status;


    public Like(String nickname, String status) {
        this.nickname = nickname;
        this.status = status;
    }
}
