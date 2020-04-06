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

    public User createUser(String email, String password, String nickname, String schoolName) {
        User user;
        String genKey = authMailSend.authMailSend(email, nickname);
        if(genKey.equals("error")){
            System.out.println("error 발생");
            user = new User(null, "exception", "authState generate error", null, null);
            return user;
        }
        user = new User(email, password, nickname, schoolName, genKey);
        userRepository.save(user);
        return user;
    }
}
