package com.hours22.devstudent.Controller;

import com.google.gson.Gson;
import com.hours22.devstudent.Command.Create.CreateAnswer;
import com.hours22.devstudent.Command.Delete.DeleteAnswer;
import com.hours22.devstudent.Entity.Alarm;
import com.hours22.devstudent.Entity.Answer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/main/answer/*")
public class AnswerController{
    @Autowired
    private CreateAnswer createAnswer;
    @Autowired
    private DeleteAnswer deleteAnswer;

    @Async(value = "Answer")
    @CacheEvict(value = { "findAllQuestions", "findQuestionsByOption", "findQuestionsByTags", "findHomeKanban" }, allEntries = true)
    @RequestMapping(value="/create",method = RequestMethod.POST)
    public CompletableFuture<String> createAnswer(@RequestBody Map<String, String> map) {
        String question_id = map.get("question_id");
        String author = map.get("author");
        String content = map.get("content");
        Answer answer = createAnswer.createAnswer(question_id, author, content);
        Gson gson = new Gson();
        String json = gson.toJson(answer);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }

    @RequestMapping(value="/delete",method = RequestMethod.POST)
    public CompletableFuture<String> deleteAnswer(@RequestBody Map<String, String> map) {
        String question_id = map.get("question_id");
        String answer_id = map.get("answer_id");
        Answer answer = deleteAnswer.deleteAnswer(question_id, answer_id);
        Gson gson = new Gson();
        String json = gson.toJson(answer);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }
}

