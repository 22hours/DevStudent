package com.hours22.studev.Test;

import com.hours22.studev.Model.Laptop;
import com.mongodb.client.MongoCollection;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface LaptopRepository extends MongoRepository<Laptop,String> {
    Laptop findTopById(int id);
    List<Laptop> findLaptopsByPriceIsLessThanEqual(int price);
}
