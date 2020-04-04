package com.hours22.devstudent.Command.Module;

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
    public Count countUnreadAlarms(String user_id){
        Criteria criteria = new Criteria("user_id");
        criteria.is(user_id);
        criteria.and("read").is(false);
        Query query = new Query(criteria);
        System.out.println(query.toString());
        List<Alarm> alarms = this.mongoTemplate.find(query, Alarm.class);
        int count = alarms.size();
        return new Count(count);
    }
}
