package com.hours22.usermanagement.Command.Create;

import com.hours22.usermanagement.Command.Email.AuthMailSend;
import com.hours22.usermanagement.Entity.User;

import com.hours22.usermanagement.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;


@Component
public class CreateUser {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthMailSend authMailSend;
    public User createUser(String _id, String password, String nickName, String email, String schoolName, String date) {
        String genKey = authMailSend.authMailSend(email, _id);
        User user;
        if(genKey.equals("error")){
            System.out.println("error 발생");
            user = new User("error", "error", "error", "error", "error", "error", "error");
            return user;
        }
        user = new User(_id, password, nickName, email, schoolName, date, genKey);
        userRepository.save(user);
        return user;
    }
}
