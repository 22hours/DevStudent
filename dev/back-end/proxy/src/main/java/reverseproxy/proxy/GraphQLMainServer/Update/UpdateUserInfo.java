package reverseproxy.proxy.GraphQLMainServer.Update;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.User;
import reverseproxy.proxy.Entity.UserInfo;
import reverseproxy.proxy.GraphQLLoginServer.ConnectLoginServer;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class UpdateUserInfo extends ConnectMainServer {
    public UserInfo updateUserInfo(String nickname, String gitLink) {
        String url = "/userInfo/update";
        JsonObject json = new JsonObject();
        json.addProperty("nickname",nickname);
        json.addProperty("gitLink",gitLink);
        Gson gson = new Gson();
        String str = getResponse(url,json);
        System.out.println(str);
        UserInfo user = gson.fromJson(str, UserInfo.class);
        return user;
    }
}
