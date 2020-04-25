package reverseproxy.proxy.GraphQLMainServer.Create;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Answer;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class CreateAnswer extends ConnectMainServer {
    public Answer createAnswer(String question_id, String author, String content)  {
        String url ="/answer/create";
        JsonObject json = new JsonObject();
        json.addProperty("question_id",question_id);
        json.addProperty("author",author);
        json.addProperty("content",content);
        Gson gson = new Gson();
        String str = getResponse(url,json);
        Answer answer = gson.fromJson(str, Answer.class);
        return answer;
    }
}
