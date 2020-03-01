package com.moonbanggoo.springwebservice.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class findPostModel {
    private String field;
    private String query;
    private String page;
    public findPostModel(){

    }
}
