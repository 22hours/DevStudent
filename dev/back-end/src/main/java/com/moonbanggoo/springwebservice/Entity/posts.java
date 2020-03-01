package com.moonbanggoo.springwebservice.Entity;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class posts {
    List<Item> it = new ArrayList<Item>();
    public posts(){

    }
}
