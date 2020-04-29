package com.hours22.devstudent.Command.Module;

import com.hours22.devstudent.Entity.Answer;
import com.hours22.devstudent.Entity.Like;
import com.hours22.devstudent.Entity.Question;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AddIsLiked {
    public Question addIsLiked(Question question, String nickname){
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
