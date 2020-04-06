package com.hours22.devstudent.Command;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.hours22.devstudent.Command.Create.CreateAnswer;
import com.hours22.devstudent.Command.Create.CreateComment;
import com.hours22.devstudent.Command.Create.CreateQuestion;
import com.hours22.devstudent.Command.Create.CreateUser;
import com.hours22.devstudent.Command.Delete.DeleteAlarm;
import com.hours22.devstudent.Command.Delete.DeleteAnswer;
import com.hours22.devstudent.Command.Delete.DeleteComment;
import com.hours22.devstudent.Command.Delete.DeleteQuestion;
import com.hours22.devstudent.Command.Module.Login;
import com.hours22.devstudent.Command.Update.UpdateUserAuthState;
import com.hours22.devstudent.Entity.*;
import com.hours22.devstudent.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Mutation implements GraphQLMutationResolver {
    //region properties
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CreateUser createUser;
    @Autowired
    private UpdateUserAuthState updateUserAuthState;
    @Autowired
    private Login login;
    @Autowired
    private CreateAnswer createAnswer;
    @Autowired
    private CreateQuestion createQuestion;
    @Autowired
    private CreateComment createComment;
    @Autowired
    private DeleteQuestion deleteQuestion;
    @Autowired
    private DeleteAnswer deleteAnswer;
    @Autowired
    private DeleteComment deleteComment;
    @Autowired
    private DeleteAlarm deleteAlarm;
    //endregion

    //region create Muation
    public Question createQuestion(String token, String title, String author, List<String> tags, String content) {
        return createQuestion.createQuestion(token, title, author, tags, content);
    }

    public Answer createAnswer(String token, String question_id, String author, String content) {
        return createAnswer.createAnswer(token, question_id, author, content);
    }

    public Comment createComment(String token, String question_id, String answer_id, String author, String content) {
        return createComment.createComment(token, question_id, answer_id, author, content);
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
    //endregion

    //region member Mutation
    public User createUser(String email, String password, String nickName, String schoolName) {
        return createUser.createUser(email, password, nickName, schoolName);
    }
    public Count checkDuplicateEmail(String email){
        if(!userRepository.existsByEmail(email))
            return new Count(1);
        return new Count(0);
    }

    public Count checkDuplicateNickname(String nickname){
        if(!userRepository.existsByNickName(nickname))
            return new Count(1);
        return new Count(0);
    }
    public User updateUserAuthState(String authState){
        return updateUserAuthState.updateUserAuthState(authState);
    }
    public User loginToServer(String email, String password) {
        return login.login(email, password);
    }
    public Alarm deleteAlarm(String alarm_id){
        return deleteAlarm.deleteAlarm(alarm_id);
    }
    //endregion
}
