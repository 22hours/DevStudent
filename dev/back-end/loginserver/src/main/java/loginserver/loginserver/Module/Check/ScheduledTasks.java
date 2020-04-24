package loginserver.loginserver.Module.Check;


import loginserver.loginserver.Module.Delete.DeleteUncertifiedAuth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.util.Date;

//public class EventTimerEveryTwentyFourHours {
@Component
public class ScheduledTasks {
    @Autowired
    DeleteUncertifiedAuth deleteUncertifiedAuth;

    @Scheduled(cron = "0 1 0 * * *")
    public void EventTimerEveryTwentyFourHoursForAttendance() {
        //설계 후 구현
    }
    @Scheduled(cron = "0 10 0 * * *")
    public void EventTimerEveryTwentyFourHours() {
        deleteUncertifiedAuth.deleteUncertifiedAuth();
    }
}
