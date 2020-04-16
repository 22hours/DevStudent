package reverseproxy.proxy.GraphQLMainServer.Create;

import com.google.gson.Gson;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Question;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class CreateQuestion extends ConnectMainServer {
    public Question createQuestion(String title, String author, List<String> tags, String content, DataFetchingEnvironment env) throws Exception {
        String authorized = checkJwt(author, env);
        String invalidate = "invalidate";
        String expired = "expired";
        if(authorized.equals(invalidate))
            return new Question(invalidate);
        if(authorized.equals(expired))
            return new Question(expired);

        String result = tags.stream()
                .collect(Collectors.joining("\", \"", "\"", "\""));
        //region Query
        String query = "mutation{\n" +
                "    createQuestion\n" +
                "    (   \n" +
                "        title : \"" + title + "\",\n" +
                "        author : \"" + author + "\", \n" +
                "        tags:[" + result + "], \n" +
                "        content : \"" + content + "\" )\n" +
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
        System.out.println(query);
        Gson gson = new Gson();
        String name = new Object() {
        }.getClass().getEnclosingMethod().getName();
        String str = getResponse(query, name);
        Question question = gson.fromJson(str, Question.class);
        return question;
    }
}
