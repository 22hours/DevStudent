package com.hours22.devstudent.Command.Find;

import com.hours22.devstudent.Command.Module.AddIsLiked;
import com.hours22.devstudent.Entity.Question;
import com.hours22.devstudent.Repository.QuestionRepository;
import com.hours22.devstudent.Security.GetNicknameInToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FindQuestionBy_id {
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private AddIsLiked addIsLiked;
    @Autowired
    GetNicknameInToken getNicknameInToken;

    public Question findQuestionBy_id(String _id, String token, String ip) {
        String nickname = getNicknameInToken.getNicknameInToken(token, ip);
        if (questionRepository.countBy_id(_id) == 0)
            return new Question("null", "Exception", null, null, "null", "Not Exist Board");
        Question question = questionRepository.findQuestionBy_id(_id);
        int views = question.getViews();
        question.setViews(views + 1);
        questionRepository.save(question);
        if(nickname == null)
            return question;
        question = addIsLiked.addIsLiked(question, nickname);
        return question;
    }
}
