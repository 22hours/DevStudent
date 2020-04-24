package com.hours22.devstudent.Command.Create;

import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CreateQuestion extends Create {
    @Autowired
    private QuestionRepository questionRepository;

    public Question createQuestion(String title, String author, List<String> tags, String content) {
        System.out.println("Start");
        String seqNum = makeSequence("Question");
        String previews = (content.length() < 100) ? content : content.substring(0, 100);
        Question question = new Question(seqNum, title, author, tags, content, previews);
        questionRepository.save(question);
        return question;
    }
}
