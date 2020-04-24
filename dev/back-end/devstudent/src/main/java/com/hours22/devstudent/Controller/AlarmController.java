package com.hours22.devstudent.Controller;

import com.hours22.devstudent.Command.Count.CountUnreadAlarms;
import com.hours22.devstudent.Command.Find.FindAllAlarms;
import com.hours22.devstudent.Entity.Alarm;
import com.hours22.devstudent.Entity.Count;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.annotation.WebServlet;
import java.util.List;

@RestController
@RequestMapping("/alarm/*")
@WebServlet(asyncSupported = true)
public class AlarmController {
    @Autowired
    private FindAllAlarms findAllAlarms;
    @Autowired
    private CountUnreadAlarms countUnreadAlarms;

    @RequestMapping(value="/all",method = RequestMethod.GET)
    public List<Alarm> findAllAlarms(@RequestParam("nickname")String nickname,
                                     @RequestParam("pageNum")int pageNum,
                                     @RequestParam("requiredCount")int requiredCount) {
        return findAllAlarms.findAllAlarms(nickname, pageNum, requiredCount);
    }
    @RequestMapping(value="/count/unread",method = RequestMethod.GET)
    public Count countUnreadAlarms(@RequestParam("nickname")String nickname) {
        return countUnreadAlarms.countUnreadAlarms(nickname);
    }

}
