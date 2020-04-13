package reverseproxy.proxy.GraphQLMainServer.Create;

import com.google.gson.Gson;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Question;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

import java.util.List;

@Component
public class CreateQuestion extends ConnectMainServer {
    public Question createQuestion(String token, String title, String author, List<String> tags, String content) {
        //region Query
        String query = "mutation{\n" +
                "    createQuestion\n" +
                "    (   token : " + token + ",\n" +
                "        title : " + title + ",\n" +
                "        author : " + author + ", \n" +
                "        tags:" + tags + ", \n" +
                "        content : " + content + " )\n" +
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
        String str = getResponse(query);
        Question question = gson.fromJson(str, Question.class);
        return question;
    }
}
