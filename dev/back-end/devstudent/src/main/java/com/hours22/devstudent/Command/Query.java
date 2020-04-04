package com.hours22.devstudent.Command;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.hours22.devstudent.Command.Find.*;
import com.hours22.devstudent.Command.Module.CountUnreadAlarms;
import com.hours22.devstudent.Entity.*;
import com.hours22.devstudent.Repository.QuestionRepository;
import com.hours22.devstudent.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Component;

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
    @Autowired
    private FindAllAlarms findAllAlarms;
    @Autowired
    private CountUnreadAlarms countUnreadAlarms;

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

    public Isit checkDuplicate(String _id){
        if(!userRepository.existsBy_id(_id))
            return new Isit(true);
        return new Isit(false);
    }

    public User findUserBy_id(String token,String _id){
        return findUserBy_id.findUserBy_id(token,_id);
    }

    public List<Alarm> findAllAlarms(String user_id, int pageNum, int requiredCount){
        return findAllAlarms.findAllAlarms(user_id,pageNum,requiredCount);
    }
    public Count countUnreadAlarms(String user_id){
        return countUnreadAlarms.countUnreadAlarms(user_id);
    }
}