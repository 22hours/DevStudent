package com.hours22.devstudent.Command.Find;

import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class FindQuestionsByOption extends Find {
    @Autowired
    private QuestionRepository questionRepository;

    public List<Question> findQuestionsByOption(String param, String option, String searchContent, int pageNum, int requiredCount){
        Criteria criteria = new Criteria(option);
        criteria.regex(searchContent,"i");
        return getQuestions(param,pageNum,requiredCount,criteria);
    }
}
