package com.hours22.studev.Test;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.hours22.studev.Model.Laptop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

public class Query implements GraphQLQueryResolver {
    private LaptopRepository laptopRepository;

    public Query(LaptopRepository laptopRepository){
        this.laptopRepository = laptopRepository;
    }
    public List<Laptop> findAllLaptops(){
        return laptopRepository.findAll();
    }
    public Laptop findLaptopByID(int id){
        return laptopRepository.findTopById(id);
    }
    public List<Laptop> findLaptopsLessThan(int price){
        return laptopRepository.findLaptopsByPriceIsLessThanEqual(price);
    }

}
