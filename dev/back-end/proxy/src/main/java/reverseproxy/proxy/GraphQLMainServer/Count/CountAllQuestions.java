package reverseproxy.proxy.GraphQLMainServer.Count;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;
import reverseproxy.proxy.Entity.Count;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class CountAllQuestions extends ConnectMainServer {
    public Count countAllQuestions() {
        String url ="http://localhost:8090/main/count/questions";
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url);
        Gson gson = new Gson();
        String str = getResponse(builder);
        Count count = gson.fromJson(str, Count.class);
        return count;
    }
}
