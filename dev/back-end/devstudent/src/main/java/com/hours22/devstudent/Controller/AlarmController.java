package com.hours22.devstudent.Controller;

import com.hours22.devstudent.Command.Delete.DeleteAlarm;
import com.hours22.devstudent.Command.Find.FindAllAlarms;
import com.hours22.devstudent.Entity.Alarm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;

import javax.servlet.annotation.WebServlet;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/main/alarm/*")
@WebServlet(asyncSupported = true)
public class AlarmController {
    @Autowired
    private FindAllAlarms findAllAlarms;

    @Autowired
    private DeleteAlarm deleteAlarm;

    @Async(value = "allAlarms")
    @RequestMapping(value="/all",method = RequestMethod.GET)
    public List<Alarm> findAllAlarms(@RequestParam("nickname")String nickname,
                                     @RequestParam("pageNum")int pageNum,
                                     @RequestParam("requiredCount")int requiredCount) {
        return findAllAlarms.findAllAlarms(nickname, pageNum, requiredCount);
    }

    @Async(value = "dAlarm")
    @RequestMapping(value="/delete",method = RequestMethod.POST)
    public Alarm deleteAlarm(@RequestBody Map<String, String> map){
        String alarm_id = map.get("alarm_id");
        return deleteAlarm.deleteAlarm(alarm_id);
    }

}
