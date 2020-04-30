package com.hours22.devstudent.Command.Create;

import com.hours22.devstudent.Command.Find.FindUserInfo;
import com.hours22.devstudent.Command.Module.AddPoint;
import com.hours22.devstudent.Entity.Alarm;
import com.hours22.devstudent.Entity.Answer;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Entity.UserInfo;
import com.hours22.devstudent.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CreateAnswer extends Create {
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private FindUserInfo findUserInfo;
    @Autowired
    private AddPoint addPoint;
    public Answer createAnswer(String question_id, String author, String content) {
        if (questionRepository.countBy_id(question_id) == 0)
            return new Answer(null, null, "Not Exist Question");
        String seqNum = makeSequence("Answer");

        UserInfo userInfo = findUserInfo.findUserInfo(author);
        Answer answer = new Answer(seqNum, userInfo, content);
        Question question = questionRepository.findQuestionBy_id(question_id);
        List<Answer> answers = question.getAnswers();
        answers.add(answer);
        question.setAnswers(answers);
        question.setAnswerCount(question.getAnswerCount() + 1);
        questionRepository.save(question);
        userInfo = addPoint.addPoint("createAnswer", author);
        answer.setAuthor(userInfo);
        // 알람 생성 기능
        String questionAuthor = question.getAuthor().getNickname(); // 게시물 작성자 알아오기
        createAlarm(question_id, questionAuthor, author, "님이 답변을 달았습니다.");
        return answer;
    }
}
