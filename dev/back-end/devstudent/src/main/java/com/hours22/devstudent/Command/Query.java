package com.hours22.devstudent.Command;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.hours22.devstudent.Command.Count.CountAllQuestions;
import com.hours22.devstudent.Command.Find.*;
import com.hours22.devstudent.Command.Count.CountUnreadAlarms;
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
    private FindUserByNickname findUserByNickname;
    @Autowired
    private FindAllAlarms findAllAlarms;
    @Autowired
    private CountUnreadAlarms countUnreadAlarms;
    @Autowired
    private CountAllQuestions countAllQuestions;

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

    public User findUserByNickname(String token,String nickname){
        return findUserByNickname.findUserByNickname(token,nickname);
    }

    public List<Alarm> findAllAlarms(String nickName, int pageNum, int requiredCount){
        return findAllAlarms.findAllAlarms(nickName,pageNum,requiredCount);
    }
    public Count countUnreadAlarms(String nickName){
        return countUnreadAlarms.countUnreadAlarms(nickName);
    }
    public Count countAllQuestions(){
        return countAllQuestions.countAllQuestions();
    }
}