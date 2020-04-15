package reverseproxy.proxy.Command;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Entity.*;
import reverseproxy.proxy.GraphQLLoginServer.*;
import reverseproxy.proxy.GraphQLMainServer.Create.CreateAnswer;
import reverseproxy.proxy.GraphQLMainServer.Create.CreateComment;
import reverseproxy.proxy.GraphQLMainServer.Create.CreateLike;
import reverseproxy.proxy.GraphQLMainServer.Create.CreateQuestion;
import reverseproxy.proxy.GraphQLMainServer.Delete.DeleteAlarm;
import reverseproxy.proxy.GraphQLMainServer.Delete.DeleteAnswer;
import reverseproxy.proxy.GraphQLMainServer.Delete.DeleteComment;
import reverseproxy.proxy.GraphQLMainServer.Delete.DeleteQuestion;

import java.util.List;
import java.util.Map;

@Component
public class Mutation implements GraphQLMutationResolver {
    @Autowired
    private CreateQuestion createQuestion;
    @Autowired
    private CreateAnswer createAnswer;
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
    private Login login;
    @Autowired
    private CreateUser createUser;
    @Autowired
    private UpdateUserAuthState updateUserAuthState;
    @Autowired
    private CheckDuplicateEmail checkDuplicateEmail;
    @Autowired
    private CheckDuplicateNickname checkDuplicateNickname;

    //region MainServer Create
    public Question createQuestion(String token, String title, String author, List<String> tags, String content) {
        // token 검사
        return createQuestion.createQuestion(token, title, author, tags, content);
    }

    public Answer createAnswer(String token, String question_id, String author, String content) {
        // token 검사
        return createAnswer.createAnswer(token, question_id, author, content);
    }

    public Comment createComment(String token, String question_id, String answer_id, String author, String content) {
        // token 검사
        return createComment.createComment(token, question_id, answer_id, author, content);
    }

    public Question createLike(String question_id, String answer_id, String nickname, String status) {
        // token 검사
        return createLike.createLike(question_id, answer_id, nickname, status);
    }

    //endregion
    //region MainServer Delete
    public Question deleteQuestion(String _id) {
        // token 검사
        return deleteQuestion.deleteQuestion(_id);
    }

    public Answer deleteAnswer(String question_id, String answer_id) {
        // token 검사
        return deleteAnswer.deleteAnswer(question_id, answer_id);
    }

    public Comment deleteComment(String question_id, String answer_id, String comment_id) {
        // token 검사
        return deleteComment.deleteComment(question_id, answer_id, comment_id);
    }

    public Alarm deleteAlarm(String alarm_id) {
        // token 검사
        return deleteAlarm.deleteAlarm(alarm_id);
    }

    //endregion
    //region LoginServer
    public User loginToServer(String email, String password) {
        // token 검사
        return login.login(email, password);
    }

    public User createUser(String email, String password, String nickname, String schoolName) {
        return createUser.createUser(email, password, nickname, schoolName);
    }

    public User updateUserAuthState(String authState) {
        return updateUserAuthState.updateUserAuthState(authState);
    }
    //endregion
    public Count checkDuplicateEmail(String email) {
        return checkDuplicateEmail.checkDuplicateEmail(email);
    }

    public Count checkDuplicateNickname(String nickname) {
        return checkDuplicateNickname.checkDuplicateNickname(nickname);
    }
}
