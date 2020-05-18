package com.hours22.devstudent.Controller;

import com.google.gson.Gson;
import com.hours22.devstudent.Command.Count.CountTags;
import com.hours22.devstudent.Entity.Alarm;
import com.hours22.devstudent.Entity.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.annotation.WebServlet;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/main/tag/*")
@WebServlet(asyncSupported = true)
public class TagController {
    @Autowired
    private CountTags countTags;

    @Async(value = "Tags")
    @Cacheable(value = "countTags")
    @RequestMapping(value="/count",method = RequestMethod.POST)
    public CompletableFuture<String> countTags(@RequestBody Map<String, String> map){
        int requiredCount = Integer.parseInt(map.get("requiredCount"));
        String tags = map.get("tags");
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
