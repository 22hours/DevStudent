package com.hours22.devstudent.Controller;

import com.hours22.devstudent.Command.Find.FindUserInfo;
import com.hours22.devstudent.Command.Update.UpdateUserInfo;
import com.hours22.devstudent.Entity.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;

import javax.servlet.annotation.WebServlet;
import java.util.Map;

@RestController
@RequestMapping("/main/userInfo/*")
@WebServlet(asyncSupported = true)
public class UserInfoController {
    @Autowired
    private UpdateUserInfo updateUserInfo;
    @Autowired
    private FindUserInfo findUserInfo;

    @Async(value = "UserInfo")
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public UserInfo updateUserInfo(@RequestBody UserInfo userInfo){
        String nickname = userInfo.getNickname();
        String gitLink = userInfo.getGitLink();
        return updateUserInfo.updateUserInfo(nickname, gitLink);
    }

    @Async(value = "UserByNickname")
    @RequestMapping(value="/find", method = RequestMethod.POST)
    public UserInfo findUserByNickname(@RequestBody Map<String, String> map){
        String nickname = map.get("nickname");
        return findUserInfo.findUserInfo(nickname);
    }
}
