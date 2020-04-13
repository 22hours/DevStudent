package reverseproxy.proxy.GraphQLLoginServer;

import com.google.gson.Gson;
import reverseproxy.proxy.Entity.User;

public class CreateUser extends ConnectLoginServer {
    public User createUser(String email, String password, String nickname, String schoolName) {
        //region Query
        String query = "mutation{\n" +
                "    createUser(\n" +
                "        email: " + email + ", \n" +
                "        password: " + password + ", \n" +
                "        nickname: " + nickname + ", \n" +
                "        schoolName : " + schoolName + ", \n" +
                "        )\n" +
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
