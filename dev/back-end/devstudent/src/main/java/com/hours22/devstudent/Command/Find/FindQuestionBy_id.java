package com.hours22.devstudent.Command.Find;

import com.hours22.devstudent.Entity.Answer;
import com.hours22.devstudent.Entity.Like;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class FindQuestionBy_id {
    @Autowired
    private QuestionRepository questionRepository;

    public Question findQuestionBy_id(String _id, String nickname) {
        if (questionRepository.countBy_id(_id) == 0)
            return new Question("null", "Exception", "hours22", null, "null", "Not Exist Board");
        Question question = questionRepository.findQuestionBy_id(_id);
        int views = question.getViews();
        question.setViews(views + 1);
        questionRepository.save(question);
        if(nickname == null)
            return question;
        List<Like> likes = question.getLikes();
        for(Like like : likes){
            if(nickname.equals(like.getNickname())){
                question.setIsLiked(like.getStatus());
                break;
            }
        }

        List<Answer> answers = question.getAnswers();
        for(Answer answer : answers){
            likes = answer.getLikes();
            for(Like like : likes){
                if(nickname.equals(like.getNickname())){
                    answer.setIsLiked(like.getStatus());
                    break;
                }
            }
        }
        question.setAnswers(answers);
        return question;
    }
}
