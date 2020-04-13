package reverseproxy.proxy.GraphQLLoginServer;

import com.google.gson.Gson;
import reverseproxy.proxy.Entity.User;

public class UpdateUserAuthState extends ConnectLoginServer {
    public User updateUserAuthState(String authState) {
        //region Query
        String query = "mutation{\n" +
                "    updateUserAuthState(authState:" + authState + ")\n" +
                "    {\n" +
                "        email\n" +
                "        password\n" +
                "        nickname\n" +
                "        schoolName\n" +
                "        date\n" +
                "        authState\n" +
                "    }\n" +
                "}";
        //endregion
        Gson gson = new Gson();
        String str = getResponse(query);
        User user = gson.fromJson(str, User.class);
        return user;
    }
}
