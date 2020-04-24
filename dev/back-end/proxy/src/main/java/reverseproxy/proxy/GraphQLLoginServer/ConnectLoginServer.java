package reverseproxy.proxy.GraphQLLoginServer;

import com.google.gson.JsonObject;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.nio.charset.Charset;


public abstract class ConnectLoginServer {
    public String getResponse(String addURL, JsonObject json) {
        String url = "http://localhost:8100/user";
        url += addURL;
        System.out.println(url);
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getMessageConverters().add(0, new StringHttpMessageConverter(Charset.forName("UTF-8")));
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-type", "application/json");
        headers.add("EncodingType","UTF-8");
        HttpEntity<String> entity = new HttpEntity<String>(json.toString(), headers);
        ResponseEntity<String> response = restTemplate.exchange(url,HttpMethod.POST, entity, String.class);
        return response.getBody();
    }
    public String getResponse(String nickname){
        String url = "http://localhost:8100/user/"+nickname+"/data";
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getMessageConverters().add(0, new StringHttpMessageConverter(Charset.forName("UTF-8")));
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url);
        System.out.println(builder.toUriString());
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-type", "application/json");
        headers.add("EncodingType","UTF-8");
        HttpEntity<?> entity = new HttpEntity<>(headers);
        HttpEntity<String> response = restTemplate.exchange(
                builder.toUriString(),
                HttpMethod.GET,
                entity,
                String.class);
        return response.getBody();
    }
}
