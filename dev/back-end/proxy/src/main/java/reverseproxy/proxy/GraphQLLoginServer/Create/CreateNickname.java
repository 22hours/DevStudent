package reverseproxy.proxy.GraphQLLoginServer.Create;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import graphql.schema.DataFetchingEnvironment;
import graphql.servlet.GraphQLContext;
import org.springframework.boot.configurationprocessor.json.JSONArray;
import org.springframework.stereotype.Component;

import reverseproxy.proxy.Entity.User;
import reverseproxy.proxy.GraphQLLoginServer.ConnectLoginServer;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CreateNickname extends ConnectLoginServer {
    public User creteNickname(String email, String nickname, DataFetchingEnvironment env) {
        GraphQLContext context =  env.getContext();
        HttpServletRequest request = context.getHttpServletRequest().get();
        String ip = request.getHeaders("ip").nextElement();
        String url = "/create/nickname";
        JsonObject json = new JsonObject();
        json.addProperty("email",email);
        json.addProperty("nickname",nickname);
        json.addProperty("ip",ip);
        Gson gson = new Gson();
        String str = getResponse(url,json);
        System.out.println(str);
        User user = gson.fromJson(str, User.class);
        return user;
    }
}
