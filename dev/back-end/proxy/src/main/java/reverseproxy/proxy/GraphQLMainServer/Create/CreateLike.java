package reverseproxy.proxy.GraphQLMainServer.Create;

import com.google.gson.Gson;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Question;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class CreateLike extends ConnectMainServer {
    public Question createLike(String question_id, String answer_id, String nickname, String status) {
        //region Query
        String query = "mutation{\n" +
                "    createLike(question_id : \"" + question_id + "\", " +
                "answer_id : \"" + answer_id + "\", " +
                "nickname : \"" + nickname + "\", " +
                "status : \"" + status + "\")\n" +
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
                "}";
        //endregion
        Gson gson = new Gson();
        String name = new Object() {
        }.getClass().getEnclosingMethod().getName();
        String str = getResponse(query, name);
        Question question = gson.fromJson(str, Question.class);
        return question;
    }
}
