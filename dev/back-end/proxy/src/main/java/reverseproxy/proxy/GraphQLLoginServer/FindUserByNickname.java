package reverseproxy.proxy.GraphQLLoginServer;

import com.google.gson.Gson;
import graphql.schema.DataFetchingEnvironment;
import graphql.servlet.GraphQLContext;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.User;

import javax.servlet.http.HttpServletRequest;

@Component
public class FindUserByNickname extends ConnectLoginServer {
    public User findUserByNickname(String nickname) {
        //region Query
        String query = "query{\n" +
                "    findUserByNickname(nickname : \"" + nickname + "\")\n" +
                "    {\n" +
                "        email\n" +
                "        password\n" +
                "        nickname\n" +
                "        schoolName\n" +
                "        date\n" +
                "        authState\n" +
                "        accessToken\n" +
                "        gitLink\n" +
                "        grade\n" +
                "        point\n" +
                "    }\n" +
                "}";
        //endregion
        Gson gson = new Gson();
        String name = new Object() {
        }.getClass().getEnclosingMethod().getName();
        String str = getResponse(query, name);
        User user = gson.fromJson(str, User.class);
        return user;
    }
}
