package com.hours22.devstudent.Entity;

import lombok.Getter;
import lombok.Setter;

import java.text.SimpleDateFormat;
import java.util.Date;

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
