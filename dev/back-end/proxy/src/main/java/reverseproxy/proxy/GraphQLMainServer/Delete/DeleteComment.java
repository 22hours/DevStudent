package reverseproxy.proxy.GraphQLMainServer.Delete;

import com.google.gson.Gson;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Comment;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class DeleteComment extends ConnectMainServer {
    public Comment deleteComment(String question_id, String answer_id, String comment_id,String nickname, DataFetchingEnvironment env) throws Exception {
        String authorized = checkJwt(nickname, env);
        String invalidate = "invalidate";
        String expired = "expired";
        if(authorized.equals(invalidate))
            return new Comment(invalidate);
        if(authorized.equals(expired))
            return new Comment(expired);
        //region Query
        String query = "mutation{\n" +
                "    deleteComment\n" +
                "    (\n" +
                "    question_id : \"" + question_id + "\",\n" +
                "    answer_id : \"" + answer_id + "\",\n" +
                "    comment_id : \"" + comment_id + "\"\n" +
                "    )\n" +
                "    {\n" +
                "        _id,\n" +
                "        author,\n" +
                "        content,\n" +
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
