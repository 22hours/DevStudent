package reverseproxy.proxy.GraphQLMainServer.Find;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.Question;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

import java.util.List;

@Component
public class FindQuestionsByOption extends ConnectMainServer {
    public List<Question> findQuestionsByOption(String param, String option, String searchContent, int pageNum, int requiredCount) {
        //region Query
        String query = "query{\n" +
                "        findQuestionsByOption(param : \"" + param + "\",\n" +
                "        option : \"" + option + "\" , \n" +
                "        searchContent : \"" + searchContent + "\", \n" +
                "        pageNum : " + pageNum + ", \n" +
                "        requiredCount: " + requiredCount + "\n" +
                "        )\n" +
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
                "} \n";
        //endregion
        Gson gson = new Gson();
        String str = getResponse(query);
        List<Question> questions = gson.fromJson(str, new TypeToken<List<Question>>() {
        }.getType());
        return questions;
    }
}
