package com.hours22.devstudent.Command.Find;

import com.hours22.devstudent.Command.Module.ReadAlarm;
import com.hours22.devstudent.Entity.Alarm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class FindAllAlarms {
    @Autowired
    private ReadAlarm readAlarm;
    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Alarm> findAllAlarms(String nickname, int pageNum, int requiredCount) {
        Criteria criteria = new Criteria("nickname");
        criteria.is(nickname);
        Query query = new Query(criteria);
        query.with(Sort.by(Sort.Direction.DESC, "date"));
        query.limit(requiredCount);
        query.skip((pageNum - 1) * requiredCount);
        List<Alarm> alarms = this.mongoTemplate.find(query, Alarm.class);
        if (alarms != null)
            readAlarm.readAlarms(alarms);
        return alarms;
    }
}
