package com.hours22.devstudent.Command.Find;

import com.hours22.devstudent.Entity.Question;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class FindQuestionsByTags extends Find {
    public List<Question> findQuestionsByTags(String param, int pageNum, int requiredCount, List<String> tags, String logical) {
        List<String> tagList = new ArrayList<>();
        for(int i=0;i<tags.size();i++){
            String name = tags.get(i);
            name = name.replaceAll(" ", "");
            tagList.add(name);
        }
        Criteria criteria = new Criteria("tags");
        if (logical.equals("and"))
            criteria.all(tagList);
        else if (logical.equals("or"))
            criteria.in(tagList);
        else {
            return new ArrayList<Question>();
        }
        return getQuestions(param, pageNum, requiredCount, criteria);
    }
}
