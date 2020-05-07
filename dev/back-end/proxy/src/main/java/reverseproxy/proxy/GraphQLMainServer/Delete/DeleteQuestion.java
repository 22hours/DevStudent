package reverseproxy.proxy.GraphQLMainServer.Delete;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Question;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class DeleteQuestion extends ConnectMainServer {
    public Question deleteQuestion(String _id) {
        String url ="/question/delete";
        JsonObject json = new JsonObject();
        json.addProperty("_id",_id);
        String str = getResponse(url, json);
        Gson gson = new Gson();
        Question question = gson.fromJson(str, Question.class);
        return question;
    }
}
