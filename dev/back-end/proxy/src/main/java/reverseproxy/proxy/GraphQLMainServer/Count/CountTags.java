package reverseproxy.proxy.GraphQLMainServer.Count;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Tag;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CountTags extends ConnectMainServer {

    public List<Tag> countTags(int requiredCount, List<String> tags){
        String result = tags.stream()
                .collect(Collectors.joining("\", \"", "\"", "\""));
        String query ="query{\n" +
                "    countTags(requiredCount : "+requiredCount+", tags : ["+result+"]){\n" +
                "        name\n" +
                "        count\n" +
                "    }\n" +
                "}";
        Gson gson = new Gson();
        String str = getResponse(query);
        List<Tag> tagList = gson.fromJson(str, new TypeToken<List<Tag>>() {
        }.getType());
        return tagList;
    }
}
