package reverseproxy.proxy.GraphQLMainServer.Find;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;
import reverseproxy.proxy.Entity.Question;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

import java.util.List;

@Component
public class FindQuestionsByOption extends ConnectMainServer {
    public List<Question> findQuestionsByOption(String param, String option, String searchContent, int pageNum, int requiredCount) {
        String url ="http://localhost:8090/main/question/all/option";
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url);
        builder.queryParam("param",param);
        builder.queryParam("option",option);
        builder.queryParam("searchContent",searchContent);
        builder.queryParam("pageNum",pageNum);
        builder.queryParam("requiredCount",requiredCount);
        Gson gson = new Gson();
        String str = getResponse(builder);
        List<Question> questions = gson.fromJson(str, new TypeToken<List<Question>>() {
        }.getType());
        return questions;
    }
}
