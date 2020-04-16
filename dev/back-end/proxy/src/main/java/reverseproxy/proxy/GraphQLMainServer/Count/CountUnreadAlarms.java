package reverseproxy.proxy.GraphQLMainServer.Count;

import com.google.gson.Gson;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Count;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

import java.util.List;

@Component
public class CountUnreadAlarms extends ConnectMainServer {
    public Count countUnreadAlarms(String nickname) {
        //region Query
        String query = "query{\n" +
                "    countUnreadAlarms(nickname : \"" + nickname + "\"){\n" +
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
