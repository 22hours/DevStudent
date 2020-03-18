package com.hours22.studev.DB;

import com.google.common.collect.Lists;
import com.hours22.studev.Model.Laptop;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class DummyLaptopDB {
    List<Laptop> laptops = Lists.newArrayList(
            new Laptop(1, "Dell", 1000, 4),
            new Laptop(2, "HP", 1400, 4),
            new Laptop(3, "Alienware", 3000, 8),
            new Laptop(4, "Macbook", 5000, 6),
            new Laptop(5, "Asus", 1600, 16),
            new Laptop(6, "Dell", 300, 2),
            new Laptop(7, "HP", 700, 4),
            new Laptop(8, "Macbook", 1900, 4),
            new Laptop(9, "HP", 2000, 8),
            new Laptop(10, "Dell", 2000, 16)
    );
    public List<Laptop> getAllLaptops(){
        return laptops;
    }
    public Optional<Laptop> getLaptopByID(int id){
        return laptops
                .stream()
                .filter(
                        laptop -> laptop.id == id).findFirst();
    }
    public List<Laptop> getLaptopsLessThan(int price){
        return laptops
                .stream()
                .filter(
                        laptop -> laptop.price < price)
                .collect(Collectors.toList());

    }
    public Laptop deleteLaptop(int id){
        Laptop laptop = laptops.get(id);
        laptops.remove(id);
        return laptop;
    }
}
