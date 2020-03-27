package com.hours22.devstudent;

import com.hours22.devstudent.AOP.MutationAspect;
import com.hours22.devstudent.Command.Mutation;
import com.hours22.devstudent.Command.Query;
import com.hours22.devstudent.Repository.BoardRepository;
import com.hours22.devstudent.Repository.SequenceIDRepository;
import org.aspectj.lang.annotation.Before;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@EnableAspectJAutoProxy
@SpringBootApplication
public class DevstudentApplication {

    public static void main(String[] args) {
        SpringApplication.run(DevstudentApplication.class, args);
    }
    @Bean
    public Query query(BoardRepository boardRepository){
        return new Query(boardRepository);
    }
    @Bean
    public Mutation mutation(BoardRepository boardRepository, SequenceIDRepository sequenceIDRepository){
        return new Mutation(boardRepository,sequenceIDRepository);
    }
    @Bean
    public MutationAspect mutationAspect(SequenceIDRepository sequenceIDRepository)
    {
        return new MutationAspect(sequenceIDRepository);
    }
}
