package com.hours22.devstudent.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
public class Count {
    private String count;

    public Count(String count) {
        this.count = count;
    }
}
