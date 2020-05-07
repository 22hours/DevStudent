package reverseproxy.proxy.GraphQLMainServer.Find;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;
import graphql.schema.DataFetchingEnvironment;
import graphql.servlet.GraphQLContext;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import reverseproxy.proxy.Entity.Question;
import reverseproxy.proxy.Entity.UserInfo;
import reverseproxy.proxy.GraphQLLoginServer.ConnectLoginServer;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Component
public class FindUserByNickname extends ConnectMainServer {
    public UserInfo findUserByNickname(String nickname) {
        String url ="/userInfo/find";
        JsonObject json = new JsonObject();
        json.addProperty("nickname",nickname);
        Gson gson = new Gson();
        String str = getResponse(url,json);
        UserInfo userInfo = gson.fromJson(str, UserInfo.class);
        return userInfo;
    }
}
