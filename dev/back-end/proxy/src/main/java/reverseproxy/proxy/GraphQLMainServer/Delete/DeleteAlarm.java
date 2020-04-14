package reverseproxy.proxy.GraphQLMainServer.Delete;

import com.google.gson.Gson;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Alarm;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class DeleteAlarm extends ConnectMainServer {
    public Alarm deleteAlarm(String alarm_id) {
        //region Query
        String query = "mutation{\n" +
                "    deleteAlarm(alarm_id \": " + alarm_id + "\"){\n" +
                "        _id\n" +
                "        question_id\n" +
                "        nickname\n" +
                "        respondent\n" +
                "        content\n" +
                "        date\n" +
                "        read\n" +
                "    }\n" +
                "}";
        //endregion
        Gson gson = new Gson();
        String name = new Object(){}.getClass().getEnclosingMethod().getName();
        String str = getResponse(query,name);
        Alarm alarm = gson.fromJson(str,Alarm.class);
        return alarm;
    }
}
