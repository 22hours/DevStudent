package com.hours22.devstudent.community;

import com.hours22.devstudent.community.Command.Mutation;
import com.hours22.devstudent.community.Command.Query;
import com.hours22.devstudent.community.Entity.SequenceID;
import com.hours22.devstudent.community.Repository.BoardRepository;
import com.hours22.devstudent.community.Repository.SequenceIDRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ServletInitializer extends SpringBootServletInitializer {

    public static void main(String[] args) {
            SpringApplication.run(ServletInitializer.class, args);
    }
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(ServletInitializer.class);
    }
    @Bean
    public Query query(BoardRepository boardRepository){

        return new Query(boardRepository);
    }
    @Bean
    public Mutation mutation(BoardRepository boardRepository, SequenceIDRepository sequenceIDRepository){
        return new Mutation(boardRepository,sequenceIDRepository);
    }
}
