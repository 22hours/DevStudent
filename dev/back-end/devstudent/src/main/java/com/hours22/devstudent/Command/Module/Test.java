package com.hours22.devstudent.Command.Module;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.hours22.devstudent.Configuration.HttpConnectionConfig;
import com.hours22.devstudent.Entity.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

public class Test {
    public void hi(){
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://172.30.1.48:8080/graphql";
        HttpHeaders headers = new HttpHeaders();
        //headers.setContentType(MediaType.APPLICATION_JSON);
        headers.add("content-type", "application/graphql");
        String query = "query{\n" +
                "    findAllQuestions(param : \"date\", pageNum : 1, requiredCount : 100){\n" +
                "        _id,\n" +
                "        title,\n" +
                "        author,\n" +
                "        tags,\n" +
                "        date,\n" +
                "        content,\n" +
                "        previews,\n" +
                "        answerCount,\n" +
                "        views,\n" +
                "        solved,\n" +
                "        comments{\n" +
                "            _id,\n" +
                "            author,\n" +
                "            content,\n" +
                "            date\n" +
                "            },\n" +
                "        answers{\n" +
                "            _id,\n" +
                "            author,\n" +
                "            content,\n" +
                "            date,\n" +
                "             comments{\n" +
                "            _id,\n" +
                "            author,\n" +
                "            content,\n" +
                "            date\n" +
                "            }\n" +
                "        }\n" +
                "    }\n" +
                "    \n" +
                "}\n" +
                "\n" +
                "    ";
        System.out.println("Query = " + query);
        System.out.println("URL = " + url);
        System.out.println("URL = " + new HttpEntity<>(query, headers).toString());
        ResponseEntity<String> response = restTemplate.postForEntity(url,new HttpEntity<>(query, headers), String.class);
        System.out.println("Response = " + response.getBody());
        Gson gson = new Gson();
        String str = response.getBody();
        str = str.substring(str.indexOf('['),str.lastIndexOf(']')+1);
        List<Question> questions = gson.fromJson(str,new TypeToken<List<Question>>(){}.getType());
        System.out.println("받아온 값 = " + questions.toString());
    }
}
