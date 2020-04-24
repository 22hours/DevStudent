package reverseproxy.proxy.GraphQLLoginServer;

import com.google.gson.Gson;
import graphql.schema.DataFetchingEnvironment;
import graphql.servlet.GraphQLContext;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import reverseproxy.proxy.Entity.User;

import javax.servlet.http.HttpServletRequest;

@Component
public class FindUserByNickname extends ConnectLoginServer {
    public User findUserByNickname(String nickname) {
        Gson gson = new Gson();
        String str = getResponse(nickname);
        User user = gson.fromJson(str, User.class);
        return user;
    }
}
