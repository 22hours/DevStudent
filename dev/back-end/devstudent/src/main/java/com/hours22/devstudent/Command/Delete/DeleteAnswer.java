package com.hours22.devstudent.Command.Delete;

import com.hours22.devstudent.Entity.Answer;
import com.hours22.devstudent.Entity.Comment;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DeleteAnswer extends Delete {
    @Autowired
    private QuestionRepository questionRepository;

    public Answer deleteAnswer(String question_id, String answer_id) {
        if (questionRepository.countBy_id(question_id) == 0)
            return new Answer("null", "dev student", "Not Exist Question");
        Question Question = questionRepository.findQuestionBy_id(question_id);
        List<Answer> answers = Question.getAnswers();
        for (Answer answer : answers) {
            if (answer.get_id().equals(answer_id)) { // 게시물도 있고, 해당 답변도 있다면
                answers.remove(answer);
                Question.setAnswers(answers);
                Question.setAnswerCount(Question.getAnswerCount() - 1);
                questionRepository.save(Question);
                return answer;
            }
        }
        //for문을 빠져나왔다는 것은 해당 답변이 없다는 뜻
        return new Answer("null", "dev student", "Not Exist Question");
    }
}
