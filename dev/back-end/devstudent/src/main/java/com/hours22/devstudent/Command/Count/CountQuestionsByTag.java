package com.hours22.devstudent.Command.Count;

import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CountQuestionsByTag {
    @Autowired
    QuestionRepository questionRepository;
}
