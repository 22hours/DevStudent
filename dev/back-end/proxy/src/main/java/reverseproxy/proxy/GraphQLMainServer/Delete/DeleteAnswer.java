package reverseproxy.proxy.GraphQLMainServer.Delete;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Answer;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class DeleteAnswer extends ConnectMainServer {
    public Answer deleteAnswer(String question_id, String answer_id){
        String url ="/answer/delete";
        JsonObject json = new JsonObject();
        json.addProperty("question_id",question_id);
        json.addProperty("answer_id",answer_id);
        String str = getResponse(url, json);
        Gson gson = new Gson();
        Answer answer = gson.fromJson(str, Answer.class);
        return answer;
    }
}
