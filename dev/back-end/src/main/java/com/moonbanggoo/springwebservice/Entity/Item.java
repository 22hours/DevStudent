package com.moonbanggoo.springwebservice.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter  @Setter
@ToString
public class Item {
    private String id;
    private String password;
    public Item(String id, String password) {
        this.id = id;
        this.password = password;
    }
    public Item(){

    }
}
