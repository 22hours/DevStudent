package reverseproxy.proxy.GraphQLMainServer.Delete;

import com.google.gson.Gson;
import reverseproxy.proxy.Entity.Answer;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

public class DeleteAnswer extends ConnectMainServer {
    public Answer deleteAnswer(String question_id, String answer_id) {
        //region Query
        String query = "\n" +
                "mutation{\n" +
                "    deleteAnswer\n" +
                "    (\n" +
                "    question_id : " + question_id + ",\n" +
                "    answer_id : " + answer_id + ",\n" +
                "    )\n" +
                "    {\n" +
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
                "}";
        //endregion
        Gson gson = new Gson();
        String str = getResponse(query);
        Answer answer = gson.fromJson(str, Answer.class);
        return answer;
    }
}
