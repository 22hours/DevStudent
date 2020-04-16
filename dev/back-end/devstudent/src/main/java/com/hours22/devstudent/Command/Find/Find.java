package com.hours22.devstudent.Command.Find;

import com.hours22.devstudent.Entity.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.ArrayList;
import java.util.List;

public abstract class Find {
    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Question> getQuestions(String param, int pageNum, int requiredCount, Criteria criteria) {
        Query query;
        if (criteria == null)
            query = new Query();
        else query = new Query(criteria);
        query.with(Sort.by(Sort.Direction.DESC, param));
        query.limit(requiredCount);
        query.skip((pageNum - 1) * requiredCount);
        List<Question> questions = this.mongoTemplate.find(query, Question.class);
        return questions;
    }
    // 추후 확장을 위해
}
