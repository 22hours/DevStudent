package com.hours22.devstudent.Command.Count;

import com.hours22.devstudent.Entity.Count;
import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CountAllQuestions {
    @Autowired
    QuestionRepository questionRepository;

    public Count countAllQuestions() {
        String num = String.valueOf(questionRepository.count());
        Count count = new Count(num);
        return count;
    }
}
