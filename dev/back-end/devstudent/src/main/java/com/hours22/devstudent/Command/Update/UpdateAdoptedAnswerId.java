package com.hours22.devstudent.Command.Update;

import com.hours22.devstudent.Entity.Answer;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UpdateAdoptedAnswerId {

    @Autowired
    QuestionRepository questionRepository;

    public Question updateAdoptedAnswerId(String question_id, String answer_id, String nickname){
        Boolean isExistAnswer = false;
        if(questionRepository.countBy_id(question_id) == 0)
            return new Question(null, "Exception", "Not Exist Question", null, null, null);
        Question question = questionRepository.findQuestionBy_id(question_id);
        if(!nickname.equals(question.getAuthor())){
            return new Question(null, "Exception", "Author does not match", null, null, null);
        }
        if(answer_id.equals(question.getAdoptedAnswerId()))
            return new Question(null, "Exception", "Already adopted", null, null, null);
        List<Answer> answers = question.getAnswers();
        for(Answer answer : answers){
            if(answer_id.equals(answer.get_id())){
                isExistAnswer = true;
                question.setAdoptedAnswerId(answer_id);
                break;
            }
        }
        if(!isExistAnswer)
            return new Question(null, "Exception", "Answer not Exist", null, null, null);
        questionRepository.save(question);
        return question;
    }
}