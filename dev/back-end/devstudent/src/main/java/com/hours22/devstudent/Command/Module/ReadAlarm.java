package com.hours22.devstudent.Command.Module;

import com.hours22.devstudent.Entity.Alarm;
import com.hours22.devstudent.Repository.AlarmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ReadAlarm {
    @Autowired
    private AlarmRepository alarmRepository;
    public void readAlarms(List<Alarm> alarms){
        for(Alarm alarm : alarms)
         {
             alarm.setRead(true);
             alarmRepository.save(alarm);
         }
    }
}
