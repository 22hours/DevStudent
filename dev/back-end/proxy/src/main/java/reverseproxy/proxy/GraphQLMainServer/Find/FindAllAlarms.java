package reverseproxy.proxy.GraphQLMainServer.Find;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Alarm;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

import java.util.ArrayList;
import java.util.List;

@Component
public class FindAllAlarms extends ConnectMainServer {
    public List<Alarm> findAllAlarms(String nickname, int pageNum, int requiredCount, DataFetchingEnvironment env) throws Exception {
        List<Alarm> alarms = new ArrayList<>();
        String authorized = checkJwt(nickname, env);
        String invalidate = "invalidate";
        String expired = "expired";
        if (authorized.equals(invalidate)) {
            Alarm alarm = new Alarm(invalidate);
            alarms.add(alarm);
            return alarms;
        }
        if (authorized.equals(expired)){
            Alarm alarm = new Alarm(expired);
            alarms.add(alarm);
            return alarms;
        }
        //region Query
        String query = " query{\n" +
                "    findAllAlarms(nickname : \"" + nickname + "\", pageNum : " + pageNum + ", requiredCount : " + requiredCount + "){\n" +
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
        String str = getResponse(query);
        alarms = gson.fromJson(str, new TypeToken<List<Alarm>>() {
        }.getType());
        return alarms;
    }
}
