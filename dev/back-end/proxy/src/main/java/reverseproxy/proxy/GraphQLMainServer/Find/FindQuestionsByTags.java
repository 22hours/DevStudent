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
        String result = tags.stream()
                .collect(Collectors.joining("\", \"", "\"", "\""));
        //region Query
        String query = " query{\n" +
                "    findQuestionsByTags( param:\"" + param + "\", pageNum : " + pageNum + ", requiredCount:" + requiredCount + ", tags: [" + result + "], logical : \"" + logical + "\"){\n" +
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
                "}\n";
        //endregion
        JsonObject aa = new JsonObject();
        aa.addProperty("param",param);
        aa.addProperty("pageNum",pageNum);
        aa.addProperty("requiredCount",requiredCount);
        aa.addProperty("tags",tags.toString());
        aa.addProperty("logical",logical);
        System.out.println(aa.toString());
        Gson gson = new Gson();
        String url = "http://localhost:8090/question/find";
        System.out.println(url);
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getMessageConverters().add(0, new StringHttpMessageConverter(Charset.forName("UTF-8")));
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-type", "application/json");
        headers.add("EncodingType","UTF-8");
        HttpEntity<String> entity = new HttpEntity<String>(aa.toString(), headers);
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        String str = response.getBody();
        System.out.println(str);
        List<Question> questions = gson.fromJson(str, new TypeToken<List<Question>>() {
        }.getType());
        return questions;

        /*String str = getResponse(query);
        List<Question> questions = gson.fromJson(str, new TypeToken<List<Question>>() {
        }.getType());
        return questions;*/

    }
}
