package reverseproxy.proxy.GraphQLLoginServer;

import com.google.gson.Gson;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.User;

@Component
public class UpdateUserAuthState extends ConnectLoginServer {
    public User updateUserAuthState(String authState) {
        //region Query
        String query = "mutation{\n" +
                "    updateUserAuthState(authState:\"" + authState + "\")\n" +
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
