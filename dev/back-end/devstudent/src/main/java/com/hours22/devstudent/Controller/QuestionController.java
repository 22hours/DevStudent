package com.hours22.devstudent.Controller;

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
import org.springframework.web.bind.annotation.*;

import javax.servlet.annotation.WebServlet;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

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

    @RequestMapping(value="/all",method = RequestMethod.GET)
    public List<Question> findAllQuestions(@RequestParam("param")String param,
                                           @RequestParam("pageNum")int pageNum,
                                           @RequestParam("requiredCount")int requiredCount) {
        return findAllQuestions.findAllQuestions(param, pageNum, requiredCount);
    }
    @RequestMapping(value="/all/option",method = RequestMethod.GET)
    public List<Question> findQuestionsByOption(@RequestParam("param")String param,
                                                @RequestParam("option")String option,
                                                @RequestParam("searchContent")String searchContent,
                                                @RequestParam("pageNum")int pageNum,
                                                @RequestParam("requiredCount")int requiredCount) {
        return findQuestionsByOption.findQuestionsByOption(param, option, searchContent, pageNum, requiredCount);
    }
    @RequestMapping(value="/find",method = RequestMethod.GET)
    public Question findQuestionBy_id(@RequestParam("_id")String _id,
                                      @RequestParam("nickname")String nickname) {
        return findQuestionBy_id.findQuestionBy_id(_id, nickname);
    }
    @RequestMapping(value="/find",method = RequestMethod.POST)
    public List<Question> findQuestionsByTags(@RequestBody Map<String, String> map) {
        String param = map.get("param");
        int pageNum = Integer.parseInt(map.get("pageNum"));
        int requiredCount = Integer.parseInt(map.get("requiredCount"));
        String tags = map.get("tags");
        String logical = map.get("logical");
        String temp = tags.substring(1,tags.length()-1);
        List<String> tagList = new ArrayList<String>(Arrays.asList(temp.split(",")));
        return findQuestionsByTags.findQuestionsByTags(param, pageNum, requiredCount, tagList, logical);
    }
    @RequestMapping(value="/all/homekanban", method = RequestMethod.GET)
    public HomeKanban findHomeKanban(@RequestParam("requiredCount") int requiredCount){
        List<Question> date = findAllQuestions.findAllQuestions("date", -1, requiredCount);
        List<Question> answerCount = findAllQuestions.findAllQuestions("answerCount", -1, requiredCount);
        List<Question> views = findAllQuestions.findAllQuestions("views",-1,requiredCount);
        return new HomeKanban(date,answerCount,views);
    }
    @RequestMapping(value="/create",method = RequestMethod.POST)
    public Question createQuestion(@RequestBody Map<String, String> map) {
        String title = map.get("title");
        String author = map.get("author");
        String tags = map.get("tags");
        String content = map.get("content");
        String temp = tags.substring(1,tags.length()-1);
        List<String> tagList = new ArrayList<String>(Arrays.asList(temp.split(",")));
        return createQuestion.createQuestion(title, author, tagList, content);
    }
    @RequestMapping(value="/create/like",method = RequestMethod.POST)
    public Question createLike(@RequestBody Map<String, String> map) {
        String question_id = map.get("question_id");
        String answer_id = map.get("answer_id");
        String nickname = map.get("nickname");
        String status = map.get("status");
        return createLike.createLike(question_id, answer_id, nickname, status);
    }

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
