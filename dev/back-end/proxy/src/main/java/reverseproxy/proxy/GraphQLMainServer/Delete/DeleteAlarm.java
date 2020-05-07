package reverseproxy.proxy.GraphQLMainServer.Delete;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Alarm;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class DeleteAlarm extends ConnectMainServer {
    public Alarm deleteAlarm(String alarm_id){
        String url ="/alarm/delete";
        JsonObject json = new JsonObject();
        json.addProperty("alarm_id",alarm_id);
        String str = getResponse(url, json);
        Gson gson = new Gson();
        Alarm alarm = gson.fromJson(str, Alarm.class);
        return alarm;
    }
}
