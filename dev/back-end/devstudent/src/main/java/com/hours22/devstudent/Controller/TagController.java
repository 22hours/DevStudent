package com.hours22.devstudent.Controller;

import com.hours22.devstudent.Command.Count.CountTags;
import com.hours22.devstudent.Entity.Tag;
import org.springframework.beans.factory.annotation.Autowired;
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

@RestController
@RequestMapping("/main/tag/*")
@WebServlet(asyncSupported = true)
public class TagController {
    @Autowired
    private CountTags countTags;

    @Async(value = "Tags")
    @RequestMapping(value="/count",method = RequestMethod.POST)
    public List<Tag> countTags(@RequestBody Map<String, String> map){
        int requiredCount = Integer.parseInt(map.get("requiredCount"));
        String tags = map.get("tags");
        String temp = tags.substring(1,tags.length()-1);
        List<String> tagList = new ArrayList<String>(Arrays.asList(temp.split(",")));
        return countTags.countTags(requiredCount, tagList);
    }
}
