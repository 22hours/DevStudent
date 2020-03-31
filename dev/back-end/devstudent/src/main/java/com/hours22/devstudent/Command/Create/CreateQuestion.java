package com.hours22.devstudent.Command.Create;

import com.hours22.devstudent.Entity.Answer;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CreateQuestion extends Create {
    @Autowired
    private QuestionRepository questionRepository;

    public Question createQuestion(String token,String title, String author, List<String> tags, String content)
    {
        if(!isAuthorized(author,token))
            return new Question(null,"error",author,tags,"Not Authorized User","Not Authorized User");
        String seqNum = makeSequence("Question");
        String previews = (content.length() < 20) ? content : content.substring(0, 20);
        Question question = new Question(seqNum,title,author,tags,content, previews);
        questionRepository.save(question);
        return question;
    }
}
