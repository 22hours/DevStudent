package reverseproxy.proxy.GraphQLMainServer.Delete;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Comment;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class DeleteComment extends ConnectMainServer {
    public Comment deleteComment(String question_id, String answer_id, String comment_id){
        String url ="/comment/delete";
        JsonObject json = new JsonObject();
        json.addProperty("question_id",question_id);
        json.addProperty("answer_id",answer_id);
        json.addProperty("comment_id",comment_id);
        String str = getResponse(url, json);
        Gson gson = new Gson();
        Comment comment = gson.fromJson(str, Comment.class);
        return comment;
    }
}
