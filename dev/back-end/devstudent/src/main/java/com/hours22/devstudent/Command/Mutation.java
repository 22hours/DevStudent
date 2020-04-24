package com.hours22.devstudent.Command;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.hours22.devstudent.Command.Create.*;
import com.hours22.devstudent.Command.Delete.DeleteAlarm;
import com.hours22.devstudent.Command.Delete.DeleteAnswer;
import com.hours22.devstudent.Command.Delete.DeleteComment;
import com.hours22.devstudent.Command.Delete.DeleteQuestion;
import com.hours22.devstudent.Command.Update.UpdateAdoptedAnswerId;
import com.hours22.devstudent.Entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Mutation implements GraphQLMutationResolver {
    //region properties
    @Autowired
    private CreateAnswer createAnswer;
    @Autowired
    private CreateQuestion createQuestion;
    @Autowired
    private CreateComment createComment;
    @Autowired
    private CreateLike createLike;
    @Autowired
    private DeleteQuestion deleteQuestion;
    @Autowired
    private DeleteAnswer deleteAnswer;
    @Autowired
    private DeleteComment deleteComment;
    @Autowired
    private DeleteAlarm deleteAlarm;
    @Autowired
    private UpdateAdoptedAnswerId updateAdoptedAnswerId;
    //endregion

    //region create Muation
    public Question createQuestion(String title, String author, List<String> tags, String content) {
        return createQuestion.createQuestion(title, author, tags, content);
    }

    public Answer createAnswer(String question_id, String author, String content) {
        return createAnswer.createAnswer(question_id, author, content);
    }

    public Comment createComment(String question_id, String answer_id, String author, String content) {
        return createComment.createComment(question_id, answer_id, author, content);
    }

    public Question createLike(String question_id, String answer_id, String nickname, String status) {
        return createLike.createLike(question_id, answer_id, nickname, status);
    }

    public Question updateAdoptedAnswerId(String question_id, String answer_id, String nickname){
        return updateAdoptedAnswerId.updateAdoptedAnswerId(question_id, answer_id, nickname);
    }
    //endregion
    //region delete Mutation
    public Question deleteQuestion(String _id) {
        return deleteQuestion.deleteQuestion(_id);
    }

    public Answer deleteAnswer(String question_id, String answer_id) {
        return deleteAnswer.deleteAnswer(question_id, answer_id);
    }

    public Comment deleteComment(String question_id, String answer_id, String comment_id) {
        return deleteComment.deleteComment(question_id, answer_id, comment_id);
    }
    public Alarm deleteAlarm(String alarm_id){
        return deleteAlarm.deleteAlarm(alarm_id);
    }
    //endregion


}
