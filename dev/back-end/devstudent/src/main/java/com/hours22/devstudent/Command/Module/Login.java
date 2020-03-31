package com.hours22.devstudent.Command.Module;

import com.hours22.devstudent.Entity.User;
import com.hours22.devstudent.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Random;

@Component
public class Login {
    @Autowired
    private RandMaker randMaker;
    @Autowired
    private UserRepository userRepository;

    public User login(String _id, String password){
        if(!userRepository.existsBy_id(_id)){
            return new User(null,"Login fail","Login fail","Login fail","Login fail","Login fail");
        }
        User user = userRepository.findBy_id(_id);
        if(!user.getPassword().equals(password) || !user.getAuthState().equals("Certificated")){
            return new User(null,"Login fail","Login fail","Login fail","Login fail","Login fail");
        }
        String key = randMaker.getKey(false, 20);
        user.setToken(key);
        userRepository.save(user);
        return user;
    }
}