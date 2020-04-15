package com.hours22.devstudent.Command.Find;

import com.hours22.devstudent.Entity.Question;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class FindQuestionsByTags extends Find {
    public List<Question> findQuestionsByTags(String param, int pageNum, int requiredCount, List<String> tags, String logical) {
        Criteria criteria = new Criteria("tags");
        if (logical.equals("and"))
            criteria.all(tags);
        else if (logical.equals("or"))
            criteria.in(tags);
        else {
            return new ArrayList<Question>();
        }
        return getQuestions(param, pageNum, requiredCount, criteria);
    }
}
