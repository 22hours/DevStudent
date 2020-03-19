package com.hours22.studev;

import com.hours22.studev.Model.Laptop;
import com.hours22.studev.Test.LaptopRepository;
import com.hours22.studev.Test.Mutation;
import com.hours22.studev.Test.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ServletInitializer extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(ServletInitializer.class,args);
    }
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(ServletInitializer.class);
    }
    @Bean
    public Query query(LaptopRepository laptopRepository){
        return new Query(laptopRepository);
    }
    @Bean
    public Mutation mutation(LaptopRepository laptopRepository){
        return new Mutation(laptopRepository);
    }
}
