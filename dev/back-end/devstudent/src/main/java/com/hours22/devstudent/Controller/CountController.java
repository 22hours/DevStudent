package com.hours22.devstudent.Controller;

import com.google.gson.Gson;
import com.hours22.devstudent.Command.Count.CountAllQuestions;
import com.hours22.devstudent.Command.Count.CountTags;
import com.hours22.devstudent.Command.Count.CountUnreadAlarms;
import com.hours22.devstudent.Entity.Alarm;
import com.hours22.devstudent.Entity.Count;
import com.hours22.devstudent.Entity.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;

import javax.servlet.annotation.WebServlet;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/main/count/*")
@WebServlet(asyncSupported = true)
public class CountController {
    @Autowired
    private CountAllQuestions countAllQuestions;
    @Autowired
    private CountUnreadAlarms countUnreadAlarms;
    @Autowired
    private CountTags countTags;

    @Async(value = "cAllQuestions")
    @Cacheable(value = "countAllQuestions")
    @RequestMapping(value="/all/questions",method = RequestMethod.POST)
    public CompletableFuture<String> countAllQuestions() {
        Count count = countAllQuestions.countAllQuestions();
        Gson gson = new Gson();
        String json = gson.toJson(count);
        System.out.println("Request = Not Thing");
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }

    @Async(value = "UnreadAlarm")
    @RequestMapping(value="/unread/alarms",method = RequestMethod.POST)
    public CompletableFuture<String> countUnreadAlarms(@RequestBody Map<String, String> map) {
        String nickname = map.get("nickname").toString();
        Count count = countUnreadAlarms.countUnreadAlarms(nickname);
        Gson gson = new Gson();
        String json = gson.toJson(count);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }

    @Async(value = "Tags")
    @Cacheable(value = "countTags")
    @RequestMapping(value="/all/tags",method = RequestMethod.POST)
    public CompletableFuture<String> countTags(@RequestBody Map<String, Object> map){
        int requiredCount = Integer.parseInt(map.get("requiredCount").toString());
        String tags = map.get("tags").toString();
        String temp = tags.substring(1,tags.length()-1);
        List<String> tagList = new ArrayList<String>(Arrays.asList(temp.split(",")));
        List<Tag> retrieveData = countTags.countTags(requiredCount, tagList);
        Gson gson = new Gson();
        String json = gson.toJson(retrieveData);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }
}
