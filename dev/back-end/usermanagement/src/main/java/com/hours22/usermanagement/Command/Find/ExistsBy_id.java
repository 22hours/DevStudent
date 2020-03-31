package com.hours22.usermanagement.Command.Find;

import com.hours22.usermanagement.Entity.User;
import com.hours22.usermanagement.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

@Component
public class ExistsBy_id {
    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private UserRepository userRepository;

    public boolean existsBy_id(String _id){
        return userRepository.existsBy_id(_id);
    }

}