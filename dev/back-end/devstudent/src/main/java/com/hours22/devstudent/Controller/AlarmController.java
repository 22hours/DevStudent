package com.hours22.devstudent.Controller;

import com.google.gson.Gson;
import com.hours22.devstudent.Command.Delete.DeleteAlarm;
import com.hours22.devstudent.Command.Find.FindAllAlarms;
import com.hours22.devstudent.Entity.Alarm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;

import javax.servlet.annotation.WebServlet;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/main/alarm/*")
@WebServlet(asyncSupported = true)
public class AlarmController {
    @Autowired
    private FindAllAlarms findAllAlarms;

    @Autowired
    private DeleteAlarm deleteAlarm;

    @Async(value = "allAlarms")
    @RequestMapping(value="/find/all",method = RequestMethod.POST)
    public CompletableFuture<String> findAllAlarms(@RequestBody Map<String, String> map) {
        String nickname = map.get("nickname").toString();
        int pageNum = Integer.parseInt(map.get("pageNum").toString());
        int requiredCount = Integer.parseInt(map.get("requiredCount").toString());
        List<Alarm> alarms = findAllAlarms.findAllAlarms(nickname, pageNum, requiredCount);
        Gson gson = new Gson();
        String json = gson.toJson(alarms);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }

    @Async(value = "dAlarm")
    @RequestMapping(value="/delete",method = RequestMethod.POST)
    public CompletableFuture<String> deleteAlarm(@RequestBody Map<String, String> map){
        String alarm_id = map.get("alarm_id");
        Alarm alarm = deleteAlarm.deleteAlarm(alarm_id);
        Gson gson = new Gson();
        String json = gson.toJson(alarm);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }

}
