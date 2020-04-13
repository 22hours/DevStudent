package reverseproxy.proxy.GraphQLLoginServer;

import com.google.gson.Gson;
import reverseproxy.proxy.Entity.User;

public class Login extends ConnectLoginServer{
    public User login(String email, String password) {
        //region Query
        String query = "mutation{\n" +
                "    loginToServer(email:" + email + ",password:" + password + ")\n" +
                "    {\n" +
                "        email\n" +
                "        password\n" +
                "        nickname\n" +
                "        schoolName\n" +
                "        date\n" +
                "        authState\n" +
                "        token\n" +
                "    }\n" +
                "\n" +
                "}";
        //endregion
        Gson gson = new Gson();
        String str = getResponse(query);
        User user = gson.fromJson(str,User.class);
        return user;
    }
}
