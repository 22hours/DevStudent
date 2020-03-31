package com.hours22.usermanagement.Command.Find;

import com.hours22.usermanagement.Entity.User;
import com.hours22.usermanagement.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

@Component
public class Login {

    @Autowired
    private UserRepository userRepository;

    public User login(String _id, String password){
        User user = userRepository.findUserBy_id(_id);
        if(user == null)
            return new User(null, "exception", "_id miss",null,null,null,null);
        if(!password.equals(user.getPassword()))
            return new User(null, "exception", "password miss",null,null,null,null);
        return user;
    }

}