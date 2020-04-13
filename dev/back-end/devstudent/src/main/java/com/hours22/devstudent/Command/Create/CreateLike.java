package com.hours22.devstudent.Command.Create;

import com.hours22.devstudent.Entity.Answer;
import com.hours22.devstudent.Entity.Comment;
import com.hours22.devstudent.Entity.Like;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CreateLike extends Create {
    @Autowired
    private QuestionRepository questionRepository;

    public Question createLike(String question_id, String answer_id, String nickname, String status)
    {
        if(questionRepository.countBy_id(question_id)==0)
            return new Question(null,"Question Not Exist Exception", null, null, null, null);
        Question question = questionRepository.findQuestionBy_id(question_id);
        List<Like> likes = new ArrayList<Like>();
        if(answer_id.equals("Question")){

            if(question.getLikes().size() > 0){
                likes = question.getLikes();
                for(Like like : likes){
                    if(like.getNickname().equals(nickname) == true)
                        return new Question(null,"Like Already Exception", null, null, null, null);
                }
            }
            Like like = new Like(nickname, status);
            likes.add(like);
            question.setLikes(likes);
            if(status.equals("up"))
                question.setLikesCount(question.getLikesCount() + 1);
            else
                question.setLikesCount(question.getLikesCount() - 1);

            questionRepository.save(question);
            return question;
        }
        else {
            Boolean isAnswerExist = false;
            List<Answer> answers = question.getAnswers();
            for(Answer answer : answers){
                if(answer.get_id().equals(answer_id) == true){
                    isAnswerExist = true;
                    likes = answer.getLikes();
                    for(Like like : likes){
                        if(like.getNickname().equals(nickname) == true)
                            return new Question(null,"Like Already Exception", null, null, null, null);
                    }
                    Like like = new Like(nickname, status);
                    likes.add(like);
                    answer.setLikes(likes);
                    if(status.equals("up"))
                        answer.setLikesCount(answer.getLikesCount() + 1);
                    else
                        answer.setLikesCount(answer.getLikesCount() - 1);

                    question.setAnswers(answers);
                    questionRepository.save(question);
                    return question;
                }
            }
            if(isAnswerExist == false)
                return new Question(null,"Answer Not Exist Exception", null, null, null, null);
        }


        return new Question(null, "Unknown Error", null, null, null, null);
    }
}
