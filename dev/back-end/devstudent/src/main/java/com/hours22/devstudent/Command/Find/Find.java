package com.hours22.devstudent.Command.Find;

import com.hours22.devstudent.Entity.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public abstract class Find {
    @Autowired
    private MongoTemplate mongoTemplate;
    private final long hour = 3600000; // 1시간
    public List<Question> getQuestions(String param, int pageNum, int requiredCount, Criteria criteria) {
        long time = System.currentTimeMillis();
        time -= hour*24*30;
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date = dayTime.format(new Date(time));

        Query query;

        if (criteria == null)
            query = new Query();
        else query = new Query(criteria);

        if(pageNum==-1)
            query.addCriteria(Criteria.where("date").gt(date));

        query.with(Sort.by(Sort.Direction.DESC, param));
        query.limit(requiredCount);
        query.skip((pageNum - 1) * requiredCount);
        List<Question> questions = this.mongoTemplate.find(query, Question.class);
        return questions;
    }
    // 추후 확장을 위해
}
