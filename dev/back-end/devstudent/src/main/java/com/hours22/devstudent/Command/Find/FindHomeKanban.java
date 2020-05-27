package com.hours22.devstudent.Command.Find;

import com.hours22.devstudent.Entity.HomeKanban;
import com.hours22.devstudent.Entity.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class FindHomeKanban {
    @Autowired
    FindAllQuestions findAllQuestions;

    public HomeKanban findHomeKanban(int requiredCount){
        List<Question> date = findAllQuestions.findAllQuestions("date", -1, requiredCount);
        List<Question> answerCount = findAllQuestions.findAllQuestions("answerCount", -1, requiredCount);
        List<Question> views = findAllQuestions.findAllQuestions("views",-1,requiredCount);
        return new HomeKanban(date,answerCount,views);
    }
}

