package reverseproxy.proxy.GraphQLLoginServer.Create;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Component;

import reverseproxy.proxy.Entity.Count;
import reverseproxy.proxy.Entity.User;
import reverseproxy.proxy.GraphQLLoginServer.ConnectLoginServer;

import java.nio.charset.Charset;

@Component
public class CreateNickname extends ConnectLoginServer {
    public User creteNickname(String email, String nickname) {
        String url = "/create/nickname";
        JsonObject json = new JsonObject();
        json.addProperty("email",email);
        json.addProperty("nickname",nickname);
        Gson gson = new Gson();
        String str = getResponse(url,json);
        System.out.println(str);
        User user = gson.fromJson(str, User.class);
        return user;
    }
}
