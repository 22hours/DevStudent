package reverseproxy.proxy.GraphQLLoginServer;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;


public abstract class ConnectLoginServer {

    public String getResponse(String query, String name) {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8100/graphql";
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-type", "application/graphql");
        ResponseEntity<String> response = restTemplate.postForEntity(url, new HttpEntity<>(query, headers), String.class);
        int size = name.length() + 2;
        String str = response.getBody();
        return str.substring(str.indexOf(name) + size, str.lastIndexOf('}') - 1);
    }
}
