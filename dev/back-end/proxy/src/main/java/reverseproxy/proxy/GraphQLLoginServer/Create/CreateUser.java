package reverseproxy.proxy.GraphQLLoginServer.Create;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.User;
import reverseproxy.proxy.GraphQLLoginServer.ConnectLoginServer;

@Component
public class CreateUser extends ConnectLoginServer {
    public User createUser(String email, String password, String schoolName) {
        String url = "/create";
        JsonObject json = new JsonObject();
        json.addProperty("email",email);
        json.addProperty("password",password);
        json.addProperty("schoolName",schoolName);
        Gson gson = new Gson();
        String str = getResponse(url,json);
        User user = gson.fromJson(str, User.class);
        return user;
    }
}
