package com.hours22.usermanagement.Command.Find;

import com.hours22.usermanagement.Entity.User;
import com.hours22.usermanagement.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

@Component
public class FindUserBy_id {
    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private UserRepository userRepository;

    public User findUserBy_id(String _id){
        User user = userRepository.findUserBy_id(_id);
        return user;
    }

}
