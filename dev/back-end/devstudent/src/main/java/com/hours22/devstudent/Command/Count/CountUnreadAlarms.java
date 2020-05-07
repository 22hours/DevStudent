package com.hours22.devstudent.Command.Count;

import com.hours22.devstudent.Entity.Alarm;
import com.hours22.devstudent.Entity.Count;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CountUnreadAlarms {
    @Autowired
    private MongoTemplate mongoTemplate;

    public Count countUnreadAlarms(String nickname) {
        Criteria criteria = new Criteria("nickname");
        criteria.is(nickname);
        criteria.and("read").is(false);
        Query query = new Query(criteria);
        List<Alarm> alarms = this.mongoTemplate.find(query, Alarm.class);
        String count = String.valueOf(alarms.size());
        return new Count(count);
    }
}
