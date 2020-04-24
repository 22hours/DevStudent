package reverseproxy.proxy.GraphQLLoginServer.Check;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Count;
import reverseproxy.proxy.GraphQLLoginServer.ConnectLoginServer;

@Component
public class CheckEmail extends ConnectLoginServer {
    public Count checkEmail(String email) {
        String url = "/check/email";
        JsonObject json = new JsonObject();
        json.addProperty("email",email);
        Gson gson = new Gson();
        String str = getResponse(url,json);
        System.out.println(str);
        Count count = gson.fromJson(str, Count.class);
        return count;
    }
}
