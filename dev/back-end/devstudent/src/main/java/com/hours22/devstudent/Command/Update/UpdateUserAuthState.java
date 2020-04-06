package com.hours22.devstudent.Command.Update;

import com.hours22.devstudent.Entity.User;
import com.hours22.devstudent.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UpdateUserAuthState {

    @Autowired
    private UserRepository userRepository;

    public User updateUserAuthState(String authState) {
        if(!userRepository.existsByAuthState(authState)){
            return new User(null,"fail","fail","fail","fail");
        }
        User user = userRepository.findByAuthState(authState);
        user.setAuthState("Certificated");
        userRepository.save(user);
        return user;
    }

}