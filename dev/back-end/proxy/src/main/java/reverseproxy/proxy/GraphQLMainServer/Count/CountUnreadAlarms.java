package reverseproxy.proxy.GraphQLMainServer.Count;

import com.google.gson.Gson;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Count;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

import java.util.List;

@Component
public class CountUnreadAlarms extends ConnectMainServer {
    public Count countUnreadAlarms(String nickname, DataFetchingEnvironment env) throws Exception {
        String authorized = checkJwt(nickname,env);
        String invalidate = "invalidate";
        String expired = "expired";
        if(authorized.equals(invalidate))
            return new Count(-1);
        if(authorized.equals(expired))
            return new Count(-2);
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
