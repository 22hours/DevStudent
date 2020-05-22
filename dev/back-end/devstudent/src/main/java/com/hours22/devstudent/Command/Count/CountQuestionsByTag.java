package com.hours22.devstudent.Command.Count;

import com.hours22.devstudent.Entity.Count;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Entity.Tag;
import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Component
public class CountQuestionsByTag {
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    MongoTemplate mongoTemplate;

    public Count countQuestionsByTag(String tag) {
        List<Tag> tagList = new ArrayList<>();
        Criteria criteria = new Criteria("tags");
        criteria.all(tag);
        Query query = new Query(criteria);
        int count = (int)this.mongoTemplate.count(query, Question.class);
        return new Count(String.valueOf(count));
    }
}
