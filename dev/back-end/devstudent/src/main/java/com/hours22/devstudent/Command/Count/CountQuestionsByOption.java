package com.hours22.devstudent.Command.Count;

import com.hours22.devstudent.Entity.Count;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Entity.Tag;
import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.index.TextIndexDefinition;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.TextCriteria;
import org.springframework.data.mongodb.core.query.TextQuery;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class CountQuestionsByOption {
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    MongoTemplate mongoTemplate;

    private final long hour = 3600000; // 1시간

    public Count countQuestionsByOption(String option, String searchContent) {
        int count;
        Query query;
        if(option.equals("author")) {
            option = "author.$id";
        }
        if(!option.equals("title and content")){
            Criteria criteria = new Criteria(option);
            criteria.regex(searchContent, "i");
            long time = System.currentTimeMillis();
            time -= hour*24*30;
            SimpleDateFormat dayTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String date = dayTime.format(new Date(time));
            query = new Query(criteria);
            count = (int)this.mongoTemplate.count(query, Question.class);
            return new Count(String.valueOf(count));
        }
        TextIndexDefinition textIndexDefinition = new TextIndexDefinition.TextIndexDefinitionBuilder().onField("title", 2F).onField("content").build();
        mongoTemplate.indexOps(Question.class).ensureIndex(textIndexDefinition);
        TextCriteria textCriteria = TextCriteria.forDefaultLanguage().matching(searchContent);
        query = TextQuery.queryText(textCriteria).sortByScore();
        count = (int)this.mongoTemplate.count(query, Question.class);
        return new Count(String.valueOf(count));
    }
}
