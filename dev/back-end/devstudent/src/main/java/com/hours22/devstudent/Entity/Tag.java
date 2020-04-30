package com.hours22.devstudent.Entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Tag implements Comparable<Tag>{
    private String name = null;
    private int count = -1;
    public Tag(String name,int count){
        this.name = name;
        this.count = count;
    }

    @Override
    public int compareTo(Tag tag) {
        if(this.count < tag.getCount()){
            return 1;
        }
        else if(this.count > tag.getCount()){
            return -1;
        }
        else return 0;
    }
}
