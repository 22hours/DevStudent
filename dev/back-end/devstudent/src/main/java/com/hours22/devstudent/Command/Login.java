package com.hours22.devstudent.Command;

import com.hours22.devstudent.Entity.User;
import com.hours22.devstudent.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Login {

    @Autowired
    private UserRepository userRepository;

    public Boolean login(String _id, String password){
        if(!userRepository.existsBy_id(_id)){
            return false;
        }
        User user = userRepository.findBy_id(_id);
        if(!user.getPassword().equals(password) || !user.getAuthState().equals("Certificated")){
            return false;
        }
        return true;
    }
}