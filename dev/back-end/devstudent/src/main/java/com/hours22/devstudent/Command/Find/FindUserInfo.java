package com.hours22.devstudent.Command.Find;

import com.hours22.devstudent.Entity.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

@Component
public class FindUserInfo {
    @Autowired
    MongoTemplate mongoTemplate;
    public UserInfo findUserInfo(String nickname){
        Criteria criteria = new Criteria("nickname");
        criteria.is(nickname);
        Query query = new Query(criteria);
        UserInfo userInfo = this.mongoTemplate.findOne(query, UserInfo.class);
        return userInfo;
    }
}
