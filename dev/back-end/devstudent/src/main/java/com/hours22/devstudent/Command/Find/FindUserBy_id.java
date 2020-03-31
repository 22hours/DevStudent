package com.hours22.devstudent.Command.Find;

import com.hours22.devstudent.Entity.User;
import com.hours22.devstudent.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FindUserBy_id {
    @Autowired
    private UserRepository userRepository;

    public User findUserBy_id(String token, String _id){
        if(userRepository.countBy_id(_id) == 0) return new User(null,"fail","not exist user","fail","fail","fail");
        User user = userRepository.findBy_id(_id);
        if(!user.getToken().equals(token)) return new User(null,"fail","not Authorized User","fail","fail","fail");
        return userRepository.findBy_id(_id);
    }
}
