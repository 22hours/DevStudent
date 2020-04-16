package reverseproxy.proxy.GraphQLLoginServer.Login;

import org.springframework.stereotype.Component;
import reverseproxy.proxy.GraphQLLoginServer.ConnectLoginServer;

@Component
public class Logout extends ConnectLoginServer {
    public Boolean logoutFromServer(String email){
        //region Query
        String query = "mutation{\n" +
                "    logoutFromServer(email:\"" + email + "\")\n" +
                "    {\n" +
                "        count" +
                "    }\n" +
                "\n" +
                "}";
        //endregion
        return true;
    }
}
