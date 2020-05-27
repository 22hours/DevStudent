package com.hours22.devstudent.Controller;

import com.google.gson.Gson;
import com.hours22.devstudent.Command.Find.FindUserInfo;
import com.hours22.devstudent.Command.Update.UpdateUserInfo;
import com.hours22.devstudent.Entity.Alarm;
import com.hours22.devstudent.Entity.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;

import javax.servlet.annotation.WebServlet;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

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
    public CompletableFuture<String> updateUserInfo(@RequestBody UserInfo userInfo){
        String nickname = userInfo.getNickname();
        String gitLink = userInfo.getGitLink();
        UserInfo changedUserInfo = updateUserInfo.updateUserInfo(nickname, gitLink);
        Gson gson = new Gson();
        String json = gson.toJson(userInfo);
        System.out.println("Request = " + userInfo.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }

    @Async(value = "UserByNickname")
    @RequestMapping(value="/find", method = RequestMethod.POST)
    public CompletableFuture<String> findUserByNickname(@RequestBody Map<String, String> map){
        String nickname = map.get("nickname");
        UserInfo userInfo = findUserInfo.findUserInfo(nickname);
        Gson gson = new Gson();
        String json = gson.toJson(userInfo);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }
}
