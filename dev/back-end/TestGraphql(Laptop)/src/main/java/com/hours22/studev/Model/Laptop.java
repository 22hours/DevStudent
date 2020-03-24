package com.hours22.studev.Model;


import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.lang.annotation.Documented;

@ToString
@Getter
@Document(collection = "laptops")
public class Laptop {
    public Laptop(int id, String name, int price, int ram) {
        this.id=id;
        this.name = name;
        this.price = price;
        this.ram = ram;
    }
    @Id
    private int id;
    private final String name;
    private final int price;
    private final int ram;

}
