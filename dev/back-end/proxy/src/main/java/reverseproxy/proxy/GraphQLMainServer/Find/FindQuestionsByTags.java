package reverseproxy.proxy.GraphQLMainServer.Find;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import reverseproxy.proxy.Entity.Question;
import reverseproxy.proxy.GraphQLMainServer.ConnectMainServer;

import java.nio.charset.Charset;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class FindQuestionsByTags extends ConnectMainServer {
    public List<Question> findQuestionsByTags(String param, int pageNum, int requiredCount, List<String> tags, String logical) {
        String url ="/question/find";
        JsonObject json = new JsonObject();
        json.addProperty("param",param);
        json.addProperty("pageNum",pageNum);
        json.addProperty("requiredCount",requiredCount);
        json.addProperty("tags",tags.toString());
        json.addProperty("logical",logical);
        Gson gson = new Gson();
        String str = getResponse(url,json);
        List<Question> questions = gson.fromJson(str, new TypeToken<List<Question>>() {
        }.getType());
        return questions;
    }
}
