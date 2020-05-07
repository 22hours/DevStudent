package reverseproxy.proxy.GraphQLLoginServer;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.User;

@Component
public class UpdateUserAuthState extends ConnectLoginServer {
    public User updateUserAuthState(String authState) {
        String url = "/update/AuthState";
        JsonObject json = new JsonObject();
        json.addProperty("authState",authState);
        Gson gson = new Gson();
        String str = getResponse(url,json);
        User user = gson.fromJson(str, User.class);
        return user;
    }
}
