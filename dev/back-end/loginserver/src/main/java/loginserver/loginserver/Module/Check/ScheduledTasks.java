package loginserver.loginserver.Module.Check;


import loginserver.loginserver.Module.Delete.DeleteUncertifiedAuth;
import loginserver.loginserver.Module.Update.ResetAttendance;
import loginserver.loginserver.Module.Update.UpdateAttendance;
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
    @Autowired
    ResetAttendance resetAttendance;

//    @Scheduled(cron = "1 0 0 * * *")
//    public void EventTimerEveryTwentyFourHoursForAttendance() {
//        resetAttendance.resetAttendance();
//    }
    @Scheduled(cron = "0 3 0 * * *")
    public void EventTimerEveryTwentyFourHours() {
        deleteUncertifiedAuth.deleteUncertifiedAuth();
    }

}
