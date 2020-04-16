package com.hours22.devstudent.Command.Create;

import com.hours22.devstudent.Entity.Alarm;
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

    public Answer createAnswer(String question_id, String author, String content) {
        if (questionRepository.countBy_id(question_id) == 0)
            return new Answer(null, "Exception", "Not Exist Question");
        String seqNum = makeSequence("Answer");
        Answer answer = new Answer(seqNum, author, content);
        Question question = questionRepository.findQuestionBy_id(question_id);
        List<Answer> answers = question.getAnswers();
        answers.add(answer);
        question.setAnswers(answers);
        question.setAnswerCount(question.getAnswerCount() + 1);
        questionRepository.save(question);
        // 알람 생성 기능
        String questionAuthor = question.getAuthor(); // 게시물 작성자 알아오기
        createAlarm(question_id, questionAuthor, author, "님이 답변을 달았습니다.");
        return answer;
    }
}
