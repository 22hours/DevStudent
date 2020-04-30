package com.hours22.devstudent.Command.Update;

import com.hours22.devstudent.Entity.UserInfo;
import com.hours22.devstudent.Repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UpdateUserInfo {
    @Autowired
    private UserInfoRepository userInfoRepository;
    public UserInfo updateUserInfo(String nickname, String gitLink){
        UserInfo user = userInfoRepository.findByNickname(nickname);
        user.setGitLink(gitLink);
        return userInfoRepository.save(user);
    }
}
