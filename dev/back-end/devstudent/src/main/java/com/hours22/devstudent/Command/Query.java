package com.hours22.devstudent.Command;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.hours22.devstudent.Command.Find.*;
import com.hours22.devstudent.Entity.Duplicate;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Entity.User;
import com.hours22.devstudent.Repository.QuestionRepository;
import com.hours22.devstudent.Repository.SequenceIDRepository;
import com.hours22.devstudent.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class Query implements GraphQLQueryResolver {

    private QuestionRepository questionRepository;
    private UserRepository userRepository;
    @Autowired
    private FindAllQuestions findAllQuestions;
    @Autowired
    private FindQuestionsByTags findQuestionsByTags;
    @Autowired
    private FindQuestionBy_id findQuestionBy_id;
    @Autowired
    private FindQuestionsByOption findQuestionsByOption;
    @Autowired
    private FindUserBy_id findUserBy_id;

    public Query(QuestionRepository questionRepository, UserRepository userRepository){
        this.questionRepository = questionRepository;
        this.userRepository = userRepository;
    }

    public List<Question> findAllQuestions(String param, int pageNum, int requiredCount) {
        return findAllQuestions.findAllQuestions(param,pageNum,requiredCount);
    }

    public List<Question> findQuestionsByOption(String param, String option, String searchContent, int pageNum, int requiredCount) {
        return findQuestionsByOption.findQuestionsByOption(param,option,searchContent,pageNum,requiredCount);
    }

        public Question findQuestionBy_id(String _id) {
        return findQuestionBy_id.findQuestionBy_id(_id);
        
    }

    public List<Question> findQuestionsByTags(String param, int pageNum, int requiredCount, List<String> tags, String logical) {
        return findQuestionsByTags.findQuestionsByTags(param, pageNum, requiredCount, tags, logical);
    }

    public Duplicate checkDuplicate(String _id){
        if(!userRepository.existsBy_id(_id))
            return new Duplicate(true);
        return new Duplicate(false);
    }

    public User findUserBy_id(String token,String _id){
        return findUserBy_id.findUserBy_id(token,_id);
    }
}