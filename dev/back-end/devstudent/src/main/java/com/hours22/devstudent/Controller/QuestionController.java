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
import org.springframework.beans.factory.annotation.Autowired;
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
    @RequestMapping(value="/find/all",method = RequestMethod.GET)
    public List<Question> findAllQuestions(@RequestParam("param")String param,
                                           @RequestParam("pageNum")int pageNum,
                                           @RequestParam("requiredCount")int requiredCount) {
        return findAllQuestions.findAllQuestions(param, pageNum, requiredCount);
    }

    @Async(value = "QuestionsByOption")
    @RequestMapping(value="/find/all/option",method = RequestMethod.GET)
    public List<Question> findQuestionsByOption(@RequestParam("param")String param,
                                                @RequestParam("option")String option,
                                                @RequestParam("searchContent")String searchContent,
                                                @RequestParam("pageNum")int pageNum,
                                                @RequestParam("requiredCount")int requiredCount) {
        return findQuestionsByOption.findQuestionsByOption(param, option, searchContent, pageNum, requiredCount);
    }

    @Async(value = "QuestionBy_id")
    @RequestMapping(value="/find/_id",method = RequestMethod.GET)
    public Question findQuestionBy_id(@RequestParam("_id")String _id,
                                      @RequestParam("nickname")String nickname) {
        return findQuestionBy_id.findQuestionBy_id(_id, nickname);
    }

    @Async(value = "QuestionsByTags")
    @RequestMapping(value="/find/tags",method = RequestMethod.POST)
    public List<Question> findQuestionsByTags(@RequestBody Map<String, Object> map) {
        String param = map.get("param").toString();
        int pageNum = Integer.parseInt(map.get("pageNum").toString());
        int requiredCount = Integer.parseInt(map.get("requiredCount").toString());
        String tags = map.get("tags").toString();
        String logical = map.get("logical").toString();
        String temp = tags.substring(1,tags.length()-1);
        List<String> tagList = new ArrayList<String>(Arrays.asList(temp.split(",")));
        return findQuestionsByTags.findQuestionsByTags(param, pageNum, requiredCount, tagList, logical);
    }

    @Async(value = "homeKanban")
    @RequestMapping(value="/find/homekanban", method = RequestMethod.GET)
    public HomeKanban findHomeKanban(@RequestParam("requiredCount") int requiredCount){
        List<Question> date = findAllQuestions.findAllQuestions("date", -1, requiredCount);
        List<Question> answerCount = findAllQuestions.findAllQuestions("answerCount", -1, requiredCount);
        List<Question> views = findAllQuestions.findAllQuestions("views",-1,requiredCount);
        return new HomeKanban(date,answerCount,views);
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
    public Question createLike(@RequestBody Map<String, String> map) {
        String question_id = map.get("question_id");
        String answer_id = map.get("answer_id");
        String nickname = map.get("nickname");
        String status = map.get("status");
        return createLike.createLike(question_id, answer_id, nickname, status);
    }

    @Async(value = "updateAdapt")
    @RequestMapping(value="/update/adopt",method = RequestMethod.POST)
    public Question updateAdoptedAnswerId(@RequestBody Map<String, String> map){
        String question_id = map.get("question_id");
        String answer_id = map.get("answer_id");
        String nickname = map.get("nickname");
        return updateAdoptedAnswerId.updateAdoptedAnswerId(question_id, answer_id, nickname);
    }

    @RequestMapping(value="/delete",method = RequestMethod.POST)
    public Question deleteQuestion(@RequestBody Map<String, String> map) {
        String _id = map.get("_id");
        return deleteQuestion.deleteQuestion(_id);
    }
}
