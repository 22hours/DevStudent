package reverseproxy.proxy.GraphQLMainServer.Count;

import com.google.gson.Gson;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;
import reverseproxy.proxy.Entity.Count;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;


@Component
public class CountUnreadAlarms extends ConnectMainServer {
    public Count countUnreadAlarms(String nickname){
        String url ="http://localhost:8090/main/count/unread/alarms";
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url);
        builder.queryParam("nickname",nickname);
        Gson gson = new Gson();
        String str = getResponse(builder);
        Count count = gson.fromJson(str, Count.class);
        return count;
    }
}
