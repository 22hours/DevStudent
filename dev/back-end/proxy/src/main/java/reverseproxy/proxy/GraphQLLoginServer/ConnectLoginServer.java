package reverseproxy.proxy.GraphQLLoginServer;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class ConnectLoginServer {

    public String getResponse(String query){
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8080/graphql";
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-type", "application/graphql");
        ResponseEntity<String> response = restTemplate.postForEntity(url,new HttpEntity<>(query, headers), String.class);
        String str = response.getBody();
        return str.substring(str.indexOf('['),str.lastIndexOf(']')+1);
    }
}
