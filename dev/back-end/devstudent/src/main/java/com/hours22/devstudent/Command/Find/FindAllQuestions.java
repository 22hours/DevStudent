package com.hours22.devstudent.Command.Find;

import com.hours22.devstudent.Entity.Question;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class FindAllQuestions extends Find {
    public List<Question> findAllQuestions(String param, int pageNum, int requiredCount){
        return getQuestions(param,pageNum,requiredCount,null);
    }
}
