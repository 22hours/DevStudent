package reverseproxy.proxy.GraphQLLoginServer.Login;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import graphql.schema.DataFetchingEnvironment;
import graphql.servlet.GraphQLContext;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.User;
import reverseproxy.proxy.GraphQLLoginServer.ConnectLoginServer;

import javax.servlet.http.HttpServletRequest;

@Component
public class Login extends ConnectLoginServer {
    public User loginToServer(String email, String password, DataFetchingEnvironment env) {
        GraphQLContext context =  env.getContext();
        HttpServletRequest request = context.getHttpServletRequest().get();
        String ip = request.getHeaders("ip").nextElement();
        request.getHeader("content-type");
        String url = "/login";
        JsonObject json = new JsonObject();
        json.addProperty("email",email);
        json.addProperty("password",password);
        json.addProperty("ip",ip);
        Gson gson = new Gson();
        String str = getResponse(url,json);
        User user = gson.fromJson(str, User.class);
        return user;
    }
}
