package com.hours22.devstudent.Entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Count {
    private String count;

    public Count(String count) {
        this.count = count;
    }
}
