package com.hours22.devstudent.Controller;

import com.google.gson.Gson;
import com.hours22.devstudent.Command.Create.CreateLike;
import com.hours22.devstudent.Command.Create.CreateQuestion;
import com.hours22.devstudent.Command.Delete.DeleteQuestion;
import com.hours22.devstudent.Command.Find.FindAllQuestions;
import com.hours22.devstudent.Command.Find.FindQuestionBy_id;
import com.hours22.devstudent.Command.Find.FindQuestionsByOption;
import com.hours22.devstudent.Command.Find.FindQuestionsByTags;
import com.hours22.devstudent.Command.Update.UpdateAdoptedAnswerId;
import com.hours22.devstudent.Entity.HomeKanban;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Entity.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;

import javax.servlet.annotation.WebServlet;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;


@RestController
@RequestMapping("/main/question/*")
@WebServlet(asyncSupported = true)
public class QuestionController{
    @Autowired
    private FindAllQuestions findAllQuestions;
    @Autowired
    private FindQuestionsByOption findQuestionsByOption;
    @Autowired
    private FindQuestionBy_id findQuestionBy_id;
    @Autowired
    private FindQuestionsByTags findQuestionsByTags;
    @Autowired
    private CreateQuestion createQuestion;
    @Autowired
    private CreateLike createLike;
    @Autowired
    private UpdateAdoptedAnswerId updateAdoptedAnswerId;
    @Autowired
    private DeleteQuestion deleteQuestion;

    @Async(value="AllQuestions")
    @RequestMapping(value="/find/all",method = RequestMethod.POST)
    public CompletableFuture<String> findAllQuestions(@RequestBody Map<String, String> map) {
        String param = map.get("param").toString();
        int pageNum = Integer.parseInt(map.get("pageNum").toString());
        int requiredCount = Integer.parseInt(map.get("requiredCount").toString());
        List<Question> questions = findAllQuestions.findAllQuestions(param, pageNum, requiredCount);
        Gson gson = new Gson();
        String json = gson.toJson(questions);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }

    @Async(value = "QuestionsByOption")
    @RequestMapping(value="/find/all/option",method = RequestMethod.POST)
    public CompletableFuture<String> findQuestionsByOption(@RequestBody Map<String, String> map) {
        String param = map.get("param").toString();
        String option = map.get("option").toString();
        String searchContent = map.get("searchContent").toString();
        int pageNum = Integer.parseInt(map.get("pageNum").toString());
        int requiredCount = Integer.parseInt(map.get("requiredCount").toString());

        List<Question> questions = findQuestionsByOption.findQuestionsByOption(param, option, searchContent, pageNum, requiredCount);
        Gson gson = new Gson();
        String json = gson.toJson(questions);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }

    @Async(value = "QuestionBy_id")
    @RequestMapping(value="/find/id",method = RequestMethod.POST)
    public CompletableFuture<String> findQuestionBy_id(@RequestHeader(value = "ip") String ip,
                                                       @RequestHeader(value = "authorization") String token,
                                                       @RequestBody Map<String, String> map) {
        String _id = map.get("_id").toString();
        Question question = findQuestionBy_id.findQuestionBy_id(_id, token, ip);
        Gson gson = new Gson();
        String json = gson.toJson(question);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }

    @Async(value = "QuestionsByTags")
    @RequestMapping(value="/find/tags",method = RequestMethod.POST)
    public CompletableFuture<String> findQuestionsByTags(@RequestBody Map<String, Object> map) {
        String param = map.get("param").toString();
        int pageNum = Integer.parseInt(map.get("pageNum").toString());
        int requiredCount = Integer.parseInt(map.get("requiredCount").toString());
        String tags = map.get("tags").toString();
        String logical = map.get("logical").toString();
        String temp = tags.substring(1,tags.length()-1);
        List<String> tagList = new ArrayList<String>(Arrays.asList(temp.split(",")));
        List<Question> questions = findQuestionsByTags.findQuestionsByTags(param, pageNum, requiredCount, tagList, logical);
        Gson gson = new Gson();
        String json = gson.toJson(questions);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }

    @Async(value = "homeKanban")
    @RequestMapping(value="/find/homekanban", method = RequestMethod.POST)
    public CompletableFuture<String> findHomeKanban(@RequestBody Map<String, String> map){
        int requiredCount = Integer.parseInt(map.get("requiredCount").toString());
        List<Question> date = findAllQuestions.findAllQuestions("date", -1, requiredCount);
        List<Question> answerCount = findAllQuestions.findAllQuestions("answerCount", -1, requiredCount);
        List<Question> views = findAllQuestions.findAllQuestions("views",-1,requiredCount);
        HomeKanban homeKanban = new HomeKanban(date,answerCount,views);
        Gson gson = new Gson();
        String json = gson.toJson(homeKanban);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }

    @Async(value = "Question")
    @RequestMapping(value="/create",method = RequestMethod.POST)
    public CompletableFuture<String> createQuestion(@RequestBody Map<String, Object> map) {
        String title = map.get("title").toString();
        String author = map.get("author").toString();
        String content = map.get("content").toString();
        String tags = map.get("tags").toString();
        String temp = tags.substring(1,tags.length()-1);
        List<String> tagList = new ArrayList<String>(Arrays.asList(temp.split(",")));
        Question question = createQuestion.createQuestion(title, author, tagList, content);
        Gson gson = new Gson();
        String json = gson.toJson(question);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }

    @Async(value = "Like")
    @RequestMapping(value="/create/like",method = RequestMethod.POST)
    public CompletableFuture<String> createLike(@RequestBody Map<String, String> map) {
        System.out.println("뭐냐고");
        String question_id = map.get("question_id");
        String answer_id = map.get("answer_id");
        String nickname = map.get("nickname");
        String status = map.get("status");
        Question question = createLike.createLike(question_id, answer_id, nickname, status);
        Gson gson = new Gson();
        String json = gson.toJson(question);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }

    @Async(value = "updateAdapt")
    @RequestMapping(value="/update/adopt",method = RequestMethod.POST)
    public CompletableFuture<String> updateAdoptedAnswerId(@RequestBody Map<String, String> map){
        String question_id = map.get("question_id");
        String answer_id = map.get("answer_id");
        String nickname = map.get("nickname");
        Question question = updateAdoptedAnswerId.updateAdoptedAnswerId(question_id, answer_id, nickname);
        Gson gson = new Gson();
        String json = gson.toJson(question);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }

    @RequestMapping(value="/delete",method = RequestMethod.POST)
    public CompletableFuture<String> deleteQuestion(@RequestBody Map<String, String> map) {
        String _id = map.get("_id");
        Question question = deleteQuestion.deleteQuestion(_id);
        Gson gson = new Gson();
        String json = gson.toJson(question);
        System.out.println("Request = " + map.toString());
        System.out.println("Response = " + json);
        return CompletableFuture.completedFuture(json);
    }
}
