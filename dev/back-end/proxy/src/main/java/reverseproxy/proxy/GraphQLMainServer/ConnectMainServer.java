package reverseproxy.proxy.GraphQLMainServer;

import graphql.schema.DataFetchingEnvironment;
import graphql.servlet.GraphQLContext;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;

@Component
public abstract class ConnectMainServer {
    // 응답형이 단일일때
    public String getResponse(String query, String name) {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8090/graphql";
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-type", "application/graphql");
        ResponseEntity<String> response = restTemplate.postForEntity(url, new HttpEntity<>(query, headers), String.class);
        int size = name.length() + 2;
        String str = response.getBody();
        System.out.println(str);
        return str.substring(str.indexOf(name) + size, str.lastIndexOf('}') - 1);
    }

    // 응답형이 복수일때
    public String getResponse(String query) {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8090/graphql";
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-type", "application/graphql");
        ResponseEntity<String> response = restTemplate.postForEntity(url, new HttpEntity<>(query, headers), String.class);
        String str = response.getBody();
        return str.substring(str.indexOf('['), str.lastIndexOf(']') + 1);
    }
    public void isAuthorized(DataFetchingEnvironment env){
        GraphQLContext context =  env.getContext();
        HttpServletRequest request = context.getHttpServletRequest().get();
        request.getHeader("content-type");
    }
}
