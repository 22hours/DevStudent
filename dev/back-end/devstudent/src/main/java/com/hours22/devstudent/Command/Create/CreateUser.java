package com.hours22.devstudent.Command.Create;

import com.hours22.devstudent.Command.Module.AuthMailSend;
import com.hours22.devstudent.Entity.User;
import com.hours22.devstudent.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class CreateUser {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthMailSend authMailSend;

    public User createUser(String _id, String password, String nickName, String email, String schoolName) {
        User user;
        String genKey = authMailSend.authMailSend(email, _id);
        if(genKey.equals("error")){
            System.out.println("error 발생");
            user = new User(null, "exception", "authState generate error", null, null, null);
            return user;
        }
        user = new User(_id, password, nickName, email, schoolName, genKey);
        userRepository.save(user);
        return user;
    }
}
