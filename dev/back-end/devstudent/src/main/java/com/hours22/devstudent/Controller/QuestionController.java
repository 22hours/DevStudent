package com.hours22.devstudent.Controller;

import com.hours22.devstudent.Command.Count.CountAllQuestions;
import com.hours22.devstudent.Command.Find.FindAllQuestions;
import com.hours22.devstudent.Command.Find.FindQuestionBy_id;
import com.hours22.devstudent.Command.Find.FindQuestionsByOption;
import com.hours22.devstudent.Command.Find.FindQuestionsByTags;
import com.hours22.devstudent.Entity.Count;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Entity.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.annotation.WebServlet;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/question/*")
@WebServlet(asyncSupported = true)
public class QuestionController {
    @Autowired
    private FindAllQuestions findAllQuestions;
    @Autowired
    private FindQuestionsByOption findQuestionsByOption;
    @Autowired
    private FindQuestionBy_id findQuestionBy_id;
    @Autowired
    private FindQuestionsByTags findQuestionsByTags;
    @Autowired
    private CountAllQuestions countAllQuestions;

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
    @RequestMapping(value="/count",method = RequestMethod.GET)
    public Count countAllQuestions() {
        return countAllQuestions.countAllQuestions();
    }
}
