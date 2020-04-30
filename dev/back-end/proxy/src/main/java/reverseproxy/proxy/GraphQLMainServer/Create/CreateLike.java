package reverseproxy.proxy.GraphQLMainServer.Create;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Question;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class CreateLike extends ConnectMainServer {
    public Question createLike(String question_id, String answer_id, String nickname, String status) {
        String url ="/question/create/like";
        JsonObject json = new JsonObject();
        json.addProperty("question_id",question_id);
        json.addProperty("answer_id",answer_id);
        json.addProperty("nickname",nickname);
        json.addProperty("status",status);
        Gson gson = new Gson();
        String str = getResponse(url, json);
        Question question = gson.fromJson(str, Question.class);
        return question;
    }
}
