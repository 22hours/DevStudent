package com.hours22.usermanagement.Command.Update;

import com.hours22.usermanagement.Entity.User;
import com.hours22.usermanagement.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UpdateUserAuthState {

    @Autowired
    private UserRepository userRepository;

    public User updateUserAuthState(String authState) {
        System.out.println("Update 시작");
        User user = userRepository.findUserByAuthState(authState);
        if(authState.equals(user.getAuthState()) == false)
            return new User("error","error","error","error","error","error", "error");
        user.setAuthState("Certificated");
        System.out.println("키값: " + authState);
        userRepository.save(user);
        return user;
    }

}