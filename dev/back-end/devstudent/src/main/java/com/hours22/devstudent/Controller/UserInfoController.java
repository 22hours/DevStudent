package com.hours22.devstudent.Controller;

import com.hours22.devstudent.Command.Update.UpdateUserInfo;
import com.hours22.devstudent.Entity.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.annotation.WebServlet;

@RestController
@RequestMapping("/main/userInfo/*")
@WebServlet(asyncSupported = true)
public class UserInfoController {
    @Autowired
    private UpdateUserInfo updateUserInfo;

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public UserInfo updateUserInfo(@RequestBody UserInfo userInfo){
        String nickname = userInfo.getNickname();
        String gitLink = userInfo.getGitLink();
        return updateUserInfo.updateUserInfo(nickname, gitLink);
    }
}
