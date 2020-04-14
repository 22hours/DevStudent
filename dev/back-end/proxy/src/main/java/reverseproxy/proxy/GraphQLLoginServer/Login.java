package reverseproxy.proxy.GraphQLLoginServer;

import com.google.gson.Gson;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.User;

@Component
public class Login extends ConnectLoginServer{
    public User login(String email, String password) {
        //region Query
        String query = "mutation{\n" +
                "    loginToServer(email:\"" + email + "\",password:\"" + password + "\")\n" +
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
        String name = new Object(){}.getClass().getEnclosingMethod().getName();
        String str = getResponse(query,name);
        User user = gson.fromJson(str,User.class);
        return user;
    }
}
