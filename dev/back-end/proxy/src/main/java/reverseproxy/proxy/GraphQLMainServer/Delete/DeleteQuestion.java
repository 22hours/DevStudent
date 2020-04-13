package reverseproxy.proxy.GraphQLMainServer.Delete;

import com.google.gson.Gson;
import reverseproxy.proxy.Entity.Question;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

public class DeleteQuestion extends ConnectMainServer {
    public Question deleteQuestion(String _id) {
        //region Query
        String query = "mutation{\n" +
                "    deleteQuestion\n" +
                "    (\n" +
                "    _id : " + _id + "\n" +
                "    )\n" +
                "    {\n" +
                "        title\n" +
                "        _id\n" +
                "        author\n" +
                "        tags\n" +
                "        date\n" +
                "        content\n" +
                "        previews\n" +
                "        answerCount\n" +
                "        likesCount\n" +
                "        views\n" +
                "        solved\n" +
                "        likes{\n" +
                "            nickname\n" +
                "            status\n" +
                "        }\n" +
                "        comments{\n" +
                "            _id\n" +
                "            author\n" +
                "            content\n" +
                "            date\n" +
                "        }\n" +
                "        answers{\n" +
                "            _id\n" +
                "            author\n" +
                "            content\n" +
                "            date\n" +
                "            likesCount\n" +
                "            comments{\n" +
                "                _id\n" +
                "                author\n" +
                "                content\n" +
                "                date\n" +
                "            }\n" +
                "            likes{\n" +
                "                nickname\n" +
                "                status\n" +
                "            }\n" +
                "        }\n" +
                "    }\n" +
                "}\n";
        //endregion
        Gson gson = new Gson();
        String str = getResponse(query);
        Question question = gson.fromJson(str, Question.class);
        return question;
    }
}
