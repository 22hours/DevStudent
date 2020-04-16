package reverseproxy.proxy.GraphQLLoginServer;

import com.google.gson.Gson;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Count;

@Component
public class CheckDuplicateEmail extends ConnectLoginServer {
    public Count checkDuplicateEmail(String email) {
        //region Query
        String query = "mutation{\n" +
                "    checkDuplicateEmail(email : \"" + email + "\"){\n" +
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
