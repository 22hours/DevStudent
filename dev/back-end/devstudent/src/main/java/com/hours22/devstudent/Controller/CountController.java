package com.hours22.devstudent.Controller;

import com.hours22.devstudent.Command.Count.CountAllQuestions;
import com.hours22.devstudent.Command.Count.CountUnreadAlarms;
import com.hours22.devstudent.Entity.Count;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.annotation.WebServlet;

@RestController
@RequestMapping("/main/count/*")
@WebServlet(asyncSupported = true)
public class CountController {
    @Autowired
    private CountAllQuestions countAllQuestions;
    @Autowired
    private CountUnreadAlarms countUnreadAlarms;

    @Async(value = "cAllQuestions")
    @RequestMapping(value="/questions",method = RequestMethod.GET)
    public Count countAllQuestions() {
        return countAllQuestions.countAllQuestions();
    }

    @Async(value = "UnreadAlarm")
    @RequestMapping(value="/unread/alarms",method = RequestMethod.GET)
    public Count countUnreadAlarms(@RequestParam("nickname")String nickname) {
        return countUnreadAlarms.countUnreadAlarms(nickname);
    }
}
