package com.hours22.devstudent.Command.Delete;

import com.hours22.devstudent.Entity.Alarm;
import com.hours22.devstudent.Repository.AlarmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DeleteAlarm {
    @Autowired
    private AlarmRepository alarmRepository;

    public Alarm deleteAlarm(String alarm_id){
        Alarm alarm = alarmRepository.findBy_id(alarm_id);
        alarmRepository.delete(alarm);
        return alarm;
    }
}
