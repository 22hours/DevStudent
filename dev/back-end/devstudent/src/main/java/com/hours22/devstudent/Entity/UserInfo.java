package com.hours22.devstudent.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@ToString
@Setter
@Getter
@Document(collection = "UserInfo")
public class UserInfo {
    @Id
    private String nickname = null;
    private String email = null;
    private String schoolName = null;
    @Setter
    private String gitLink = null;
    @Setter
    private String grade = "bean";
    @Setter
    private int point = 0;
    @Setter
    @Getter
    private boolean attendance = false;
}

