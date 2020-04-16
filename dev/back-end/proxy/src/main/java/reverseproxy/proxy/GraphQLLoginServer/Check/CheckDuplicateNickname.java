package reverseproxy.proxy.GraphQLLoginServer.Check;

import com.google.gson.Gson;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Count;
import reverseproxy.proxy.GraphQLLoginServer.ConnectLoginServer;

@Component
public class CheckDuplicateNickname extends ConnectLoginServer {
    public Count checkDuplicateNickname(String nickname) {
        //region Query
        String query = "mutation{\n" +
                "    checkDuplicateNickname(nickname : \"" + nickname + "\"){\n" +
                "        count\n" +
                "    }\n" +
                "}";
        //endregion
        Gson gson = new Gson();
        String name = new Object() {
        }.getClass().getEnclosingMethod().getName();
        String str = getResponse(query, name);
        Count count = gson.fromJson(str, Count.class);
        return count;
    }
}
