package com.hours22.usermanagement.Command.Create;

import com.hours22.usermanagement.Command.Email.AuthMailSend;
import com.hours22.usermanagement.Command.Find.ExistsBy_id;
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

    @Autowired
    private ExistsBy_id existsBy_id;

    public User createUser(String _id, String password, String nickName, String email, String schoolName, String date) {
        User user;
        if(existsBy_id.existsBy_id(_id)){
            System.out.println("아이디 중복");
            user = new User(null, "exception", "_id already exists", null, null, null, null);
            return null;
        }
        String genKey = authMailSend.authMailSend(email, _id);
        if(genKey.equals("error")){
            System.out.println("error 발생");
            user = new User(null, "exception", "authState generate error", null, null, null, null);
            return user;
        }
        user = new User(_id, password, nickName, email, schoolName, date, genKey);
        userRepository.save(user);
        return user;
    }
}
