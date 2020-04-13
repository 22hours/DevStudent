package reverseproxy.proxy.GraphQLMainServer.Delete;

import com.google.gson.Gson;
import reverseproxy.proxy.Entity.Alarm;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

public class DeleteAlarm extends ConnectMainServer {
    public Alarm deleteAlarm(String alarm_id) {
        String query = "mutation{\n" +
                "    deleteAlarm(alarm_id : " + alarm_id + "){\n" +
                "        _id\n" +
                "        question_id\n" +
                "        nickname\n" +
                "        respondent\n" +
                "        content\n" +
                "        date\n" +
                "        read\n" +
                "    }\n" +
                "}";
        Gson gson = new Gson();
        String str = getResponse(query);
        Alarm alarm = gson.fromJson(str,Alarm.class);
        return alarm;
    }
}
