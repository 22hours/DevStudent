package reverseproxy.proxy.GraphQLMainServer.Update;

import com.google.gson.Gson;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Question;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

@Component
public class UpdateAdoptedAnswerId extends ConnectMainServer {

    public Question updateAdoptedAnswerId(String question_id, String answer_id, String nickname){
        String query = "mutation{\n" +
                "    updateAdoptedAnswerId(question_id : \"" + question_id + "\", " +
                "answer_id : \"" + answer_id + "\", " +
                "nickname : \"" + nickname + "\")\n " +
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
                "        isLiked\n" +
                "        views\n" +
                "        adoptedAnswerId\n" +
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
                "            isLiked\n" +
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
