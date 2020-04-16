package reverseproxy.proxy.GraphQLLoginServer.Create;

import com.google.gson.Gson;
import graphql.schema.DataFetchingEnvironment;
import graphql.servlet.GraphQLContext;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.User;
import reverseproxy.proxy.GraphQLLoginServer.ConnectLoginServer;

import javax.servlet.http.HttpServletRequest;

@Component
public class CreateNewAccessToken extends ConnectLoginServer {
    public User createNewAccessToken(String nickname, DataFetchingEnvironment env) {
        GraphQLContext context =  env.getContext();
        HttpServletRequest request = context.getHttpServletRequest().get();
        String jwt = request.getHeader("Authorization"); // refreshToken 주기
        //region Query
        String query = "mutation{\n" +
                "    reissuanceAccessToken(\n" +
                "        nickname: \"" + nickname + "\", \n" +
                "        refreshToken : \"" + jwt + "\", \n" +
                "        )\n" +
                "    {\n" +
                "        email\n" +
                "        password\n" +
                "        nickname\n" +
                "        schoolName\n" +
                "        date\n" +
                "        authState\n" +
                "        accessToken\n" +
                "        refreshToken\n" +
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
