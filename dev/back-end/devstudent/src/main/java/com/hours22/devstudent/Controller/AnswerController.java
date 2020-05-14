package com.hours22.devstudent.Controller;

import com.hours22.devstudent.Command.Create.CreateAnswer;
import com.hours22.devstudent.Command.Delete.DeleteAnswer;
import com.hours22.devstudent.Entity.Answer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/main/answer/*")
public class AnswerController{
    @Autowired
    private CreateAnswer createAnswer;
    @Autowired
    private DeleteAnswer deleteAnswer;

    @Async(value = "createAnswer")
    @RequestMapping(value="/create",method = RequestMethod.POST)
    public Answer createAnswer(@RequestBody Map<String, String> map) {
        String question_id = map.get("question_id");
        String author = map.get("author");
        String content = map.get("content");
        return createAnswer.createAnswer(question_id, author, content);
    }

    @RequestMapping(value="/delete",method = RequestMethod.POST)
    public Answer deleteAnswer(@RequestBody Map<String, String> map) {
        String question_id = map.get("question_id");
        String answer_id = map.get("answer_id");
        return deleteAnswer.deleteAnswer(question_id, answer_id);
    }
}
