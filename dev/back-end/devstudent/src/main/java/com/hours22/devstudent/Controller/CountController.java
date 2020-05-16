package com.hours22.devstudent.Controller;

import com.hours22.devstudent.Command.Count.CountAllQuestions;
import com.hours22.devstudent.Command.Count.CountTags;
import com.hours22.devstudent.Command.Count.CountUnreadAlarms;
import com.hours22.devstudent.Entity.Count;
import com.hours22.devstudent.Entity.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;

import javax.servlet.annotation.WebServlet;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

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
    @RequestMapping(value="/all/questions",method = RequestMethod.GET)
    public Count countAllQuestions() {
        return countAllQuestions.countAllQuestions();
    }

    @Async(value = "UnreadAlarm")
    @RequestMapping(value="/unread/alarms",method = RequestMethod.GET)
    public Count countUnreadAlarms(@RequestParam("nickname")String nickname) {
        return countUnreadAlarms.countUnreadAlarms(nickname);
    }

    @Async(value = "Tags")
    @RequestMapping(value="/all/tags",method = RequestMethod.POST)
    public List<Tag> countTags(@RequestBody Map<String, Object> map){
        int requiredCount = Integer.parseInt(map.get("requiredCount").toString());
        String tags = map.get("tags").toString();
        String temp = tags.substring(1,tags.length()-1);
        List<String> tagList = new ArrayList<String>(Arrays.asList(temp.split(",")));
        return countTags.countTags(requiredCount, tagList);
    }
}
