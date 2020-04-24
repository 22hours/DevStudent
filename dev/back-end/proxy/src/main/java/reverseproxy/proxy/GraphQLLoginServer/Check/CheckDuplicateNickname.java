package reverseproxy.proxy.GraphQLLoginServer.Check;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import reverseproxy.proxy.Entity.Count;
import reverseproxy.proxy.GraphQLLoginServer.ConnectLoginServer;

import java.nio.charset.Charset;

@Component
public class CheckDuplicateNickname extends ConnectLoginServer {
    public Count checkDuplicateNickname(String nickname) {
        String url = "/check/nickname";
        JsonObject json = new JsonObject();
        json.addProperty("nickname",nickname);
        Gson gson = new Gson();
        String str = getResponse(url,json);
        System.out.println(str);
        Count count = gson.fromJson(str, Count.class);
        return count;
    }
}
