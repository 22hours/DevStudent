package reverseproxy.proxy.GraphQLMainServer.Create;

import com.google.gson.Gson;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Comment;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class CreateComment extends ConnectMainServer {
    public Comment createComment(String token, String question_id, String answer_id, String author, String content, DataFetchingEnvironment env) throws Exception {
        String authorized = checkJwt(author, env);
        String invalidate = "invalidate";
        String expired = "expired";
        if(authorized.equals(invalidate))
            return new Comment(invalidate);
        if(authorized.equals(expired))
            return new Comment(expired);
        //region Query
        String query = "mutation{\n" +
                "    createComment\n" +
                "    (token : \"" + token + "\",\n" +
                "    question_id : \"" + question_id + "\",\n" +
                "    answer_id : \"" + answer_id + "\",\n" +
                "    author : \"" + author + "\",\n" +
                "    content : \"" + content + "\",\n" +
                "    )\n" +
                "    {\n" +
                "        _id\n" +
                "        author\n" +
                "        content\n" +
                "        date\n" +
                "    }\n" +
                "}";
        //endregion
        Gson gson = new Gson();
        String name = new Object() {
        }.getClass().getEnclosingMethod().getName();
        String str = getResponse(query, name);
        Comment comment = gson.fromJson(str, Comment.class);
        return comment;
    }
}
