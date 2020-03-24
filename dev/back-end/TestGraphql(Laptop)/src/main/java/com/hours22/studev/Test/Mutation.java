package com.hours22.studev.Test;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.hours22.studev.Model.Laptop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


public class Mutation implements GraphQLMutationResolver {
    private LaptopRepository laptopRepository;

    public Mutation(LaptopRepository laptopRepository){
        this.laptopRepository = laptopRepository;
    }
    public Laptop deleteLaptop(int id){
        Laptop laptop = laptopRepository.findTopById(id);
        laptopRepository.delete(laptop);
        System.out.println(laptop.toString());
        return laptop;
    }
    public Laptop createLaptop(int id, String name, int price, int ram){
        Laptop laptop = new Laptop(id,name,price,ram);
        laptopRepository.save(laptop);
        return laptop;
    }
}
