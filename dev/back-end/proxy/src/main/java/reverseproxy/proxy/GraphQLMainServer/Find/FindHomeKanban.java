package reverseproxy.proxy.GraphQLMainServer.Find;

import com.google.gson.Gson;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;
import reverseproxy.proxy.Entity.HomeKanban;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class FindHomeKanban extends ConnectMainServer {
    public HomeKanban findHomeKanban(int requiredCount){
        String url ="http://localhost:8090/main/question/all/homekanban";
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url);
        builder.queryParam("requiredCount",requiredCount);
        Gson gson = new Gson();
        String str = getResponse(builder);
        HomeKanban homeKanban = gson.fromJson(str,HomeKanban.class);
        return homeKanban;
    }
}
