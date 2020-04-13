package reverseproxy.proxy.GraphQLMainServer.Delete;

import com.google.gson.Gson;
import reverseproxy.proxy.Entity.Comment;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

public class DeleteComment extends ConnectMainServer {
    public Comment deleteComment(String question_id, String answer_id, String comment_id) {
        //region Query
        String query = "mutation{\n" +
                "    deleteComment\n" +
                "    (\n" +
                "    question_id : " + question_id + ",\n" +
                "    answer_id : " + answer_id + ",\n" +
                "    comment_id : " + comment_id + "\n" +
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
        String str = getResponse(query);
        Comment comment = gson.fromJson(str, Comment.class);
        return comment;
    }
}
