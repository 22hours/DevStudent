package reverseproxy.proxy.GraphQLMainServer.Count;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Tag;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

import java.util.List;

@Component
public class CountTags extends ConnectMainServer {

    public List<Tag> countTags(int requiredCount, List<String> tags){
        String url ="/tag/count";
        JsonObject json = new JsonObject();
        json.addProperty("requiredCount",requiredCount);
        json.addProperty("tags",tags.toString());
        Gson gson = new Gson();
        String str = getResponse(url,json);
        List<Tag> tagList = gson.fromJson(str, new TypeToken<List<Tag>>() {
        }.getType());
        return tagList;
    }
}
