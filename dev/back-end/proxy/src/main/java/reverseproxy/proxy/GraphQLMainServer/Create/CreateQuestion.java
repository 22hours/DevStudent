package reverseproxy.proxy.GraphQLMainServer.Create;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Question;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CreateQuestion extends ConnectMainServer {
    public Question createQuestion(String title, String author, List<String> tags, String content){
        String url ="/question/create";
        JsonObject json = new JsonObject();
        json.addProperty("title",title);
        json.addProperty("author",author);
        json.addProperty("tags",tags.toString());
        json.addProperty("content",content);
        String str = getResponse(url, json);
        Gson gson = new Gson();
        Question question = gson.fromJson(str, Question.class);
        return question;
    }
}
