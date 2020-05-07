package com.hours22.devstudent.Command.Count;

import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Entity.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Component
public class CountTags {
    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Tag> countTags(int requiredCount, List<String> tags){
        List<Tag> tagList = new ArrayList<>();
        Criteria criteria = new Criteria("tags");
        for(int i=0;i<tags.size();i++){
            String name = tags.get(i);
            name = name.replaceAll(" ", "");
            criteria.all(name);
            Query query = new Query(criteria);
            int count = (int)this.mongoTemplate.count(query, Question.class);
            Tag tag = new Tag(name,count);
            tagList.add(tag);
        }
        Collections.sort(tagList);
        if(requiredCount>tagList.size() || requiredCount == -1)
            return tagList;

        return new ArrayList<>(tagList.subList(0,requiredCount));
    }
}
