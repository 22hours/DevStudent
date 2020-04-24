package reverseproxy.proxy.GraphQLMainServer.Count;

import com.google.gson.Gson;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Count;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class CountAllQuestions extends ConnectMainServer {
    public Count countAllQuestions() {
        //region Query
        String query = "query{\n" +
                "    countAllQuestions{\n" +
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
