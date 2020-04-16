package reverseproxy.proxy.GraphQLMainServer.Create;

import com.google.gson.Gson;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Answer;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class CreateAnswer extends ConnectMainServer {
    public Answer createAnswer(String question_id, String author, String content, DataFetchingEnvironment env) throws Exception {
        String authorized = checkJwt(author, env);
        String invalidate = "invalidate";
        String expired = "expired";
        if(authorized.equals(invalidate))
            return new Answer(invalidate);
        if(authorized.equals(expired))
            return new Answer(expired);
        //region Query
        String query = "\n" +
                "mutation{\n" +
                "    createAnswer(\n" +
                "        question_id:\"" + question_id + "\",\n" +
                "        author:\"" + author + "\",\n" +
                "        content:\"" + content + "\"){\n" +
                "        _id\n" +
                "        author\n" +
                "        content\n" +
                "        date\n" +
                "        likesCount\n" +
                "        likes{\n" +
                "            nickname\n" +
                "            status\n" +
                "        }\n" +
                "    }\n" +
                "}\n";
        //endregion
        Gson gson = new Gson();
        String name = new Object() {
        }.getClass().getEnclosingMethod().getName();
        String str = getResponse(query, name);
        Answer answer = gson.fromJson(str, Answer.class);
        return answer;
    }
}
