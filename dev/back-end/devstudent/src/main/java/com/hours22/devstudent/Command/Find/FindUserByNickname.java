package com.hours22.devstudent.Command.Find;

import com.hours22.devstudent.Entity.User;
import com.hours22.devstudent.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FindUserByNickname {
    @Autowired
    private UserRepository userRepository;

    public User findUserByNickname(String token, String nickname){
        if(userRepository.countByNickName(nickname) == 0) return new User(null,"fail","not exist user","fail","fail");
        User user = userRepository.findByNickName(nickname);
        if(!user.getToken().equals(token)) return new User(null,"fail","not Authorized User","fail","fail");
        return user;
    }
}
