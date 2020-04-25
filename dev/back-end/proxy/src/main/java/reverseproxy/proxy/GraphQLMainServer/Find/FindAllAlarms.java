package reverseproxy.proxy.GraphQLMainServer.Find;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;
import reverseproxy.proxy.Entity.Alarm;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

import java.util.ArrayList;
import java.util.List;

@Component
public class FindAllAlarms extends ConnectMainServer {
    public List<Alarm> findAllAlarms(String nickname, int pageNum, int requiredCount){
        String url ="http://localhost:8090/main/alarm/all";
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url);
        builder.queryParam("nickname",nickname);
        builder.queryParam("pageNum",pageNum);
        builder.queryParam("requiredCount",requiredCount);
        Gson gson = new Gson();
        String str = getResponse(builder);
        List<Alarm> alarms = gson.fromJson(str, new TypeToken<List<Alarm>>() {
        }.getType());
        return alarms;
    }
}
