package com.hours22.devstudent.Command.Create;

import com.hours22.devstudent.Entity.Answer;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CreateAnswer extends Create {
    @Autowired
    private QuestionRepository questionRepository;

    public Answer createAnswer(String token,String question_id, String author, String content)
    {
        if(!isAuthorized(author,token))
            return new Answer(null,"Exception","Not Exist Question");
        if(questionRepository.countBy_id(question_id)==0)
            return new Answer("null","Exception","Not Exist Question");
        String seqNum = makeSequence("Answer");
        Answer answer = new Answer(seqNum,author,content);
        Question Question = questionRepository.findQuestionBy_id(question_id);
        List<Answer> answers = Question.getAnswers();
        answers.add(answer);
        Question.setAnswers(answers);
        Question.setAnswerCount(Question.getAnswerCount()+1);
        questionRepository.save(Question);
        return answer;
    }
}
