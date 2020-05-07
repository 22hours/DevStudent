package reverseproxy.proxy.GraphQLMainServer.Create;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Comment;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class CreateComment extends ConnectMainServer {
    public Comment createComment(String question_id, String answer_id, String author, String content){
        String url ="/comment/create";
        JsonObject json = new JsonObject();
        json.addProperty("question_id",question_id);
        json.addProperty("answer_id",answer_id);
        json.addProperty("author",author);
        json.addProperty("content",content);
        Gson gson = new Gson();
        String str = getResponse(url,json);
        Comment comment = gson.fromJson(str, Comment.class);
        return comment;
    }
}
