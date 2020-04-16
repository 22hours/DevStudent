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
    public List<Alarm> findAllAlarms(String nickname, int pageNum, int requiredCount){
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
        List<Alarm> alarms = gson.fromJson(str, new TypeToken<List<Alarm>>() {
        }.getType());
        return alarms;
    }
}
