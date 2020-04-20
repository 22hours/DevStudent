package reverseproxy.proxy.GraphQLLoginServer;

import com.google.gson.Gson;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.User;

@Component
public class UpdateUserInfo extends ConnectLoginServer {
    public User updateUserInfo(String nickname, String gitLink) {
        //region Query
        String query = "mutation{\n" +
                "    updateUserInfo(nickname:\"" + nickname + "\", gitLink:\"" + gitLink + "\")\n" +
                "    {\n" +
                "        email\n" +
                "        password\n" +
                "        nickname\n" +
                "        schoolName\n" +
                "        date\n" +
                "        authState\n" +
                "        accessToken\n" +
                "        gitLink\n" +
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
