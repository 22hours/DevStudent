package reverseproxy.proxy.GraphQLMainServer.Update;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Question;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class UpdateAdoptedAnswerId extends ConnectMainServer {

    public Question updateAdoptedAnswerId(String question_id, String answer_id, String nickname){
        String url ="/question/update/adopt";
        JsonObject json = new JsonObject();
        json.addProperty("question_id",question_id);
        json.addProperty("answer_id",answer_id);
        json.addProperty("nickname",nickname);
        Gson gson = new Gson();
        String str = getResponse(url,json);
        Question question = gson.fromJson(str, Question.class);
        return question;
    }
}
