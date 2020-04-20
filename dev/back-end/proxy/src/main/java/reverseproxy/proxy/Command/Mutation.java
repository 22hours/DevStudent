package reverseproxy.proxy.Command;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import reverseproxy.proxy.Command.Security.IsValidate;
import reverseproxy.proxy.Entity.*;
import reverseproxy.proxy.GraphQLLoginServer.*;
import reverseproxy.proxy.GraphQLLoginServer.Check.CheckDuplicateEmail;
import reverseproxy.proxy.GraphQLLoginServer.Check.CheckDuplicateNickname;
import reverseproxy.proxy.GraphQLLoginServer.Create.CreateNewAccessToken;
import reverseproxy.proxy.GraphQLLoginServer.Create.CreateUser;
import reverseproxy.proxy.GraphQLLoginServer.Login.Login;
import reverseproxy.proxy.GraphQLLoginServer.Login.Logout;
import reverseproxy.proxy.GraphQLMainServer.Create.CreateAnswer;
import reverseproxy.proxy.GraphQLMainServer.Create.CreateComment;
import reverseproxy.proxy.GraphQLMainServer.Create.CreateLike;
import reverseproxy.proxy.GraphQLMainServer.Create.CreateQuestion;
import reverseproxy.proxy.GraphQLMainServer.Delete.DeleteAlarm;
import reverseproxy.proxy.GraphQLMainServer.Delete.DeleteAnswer;
import reverseproxy.proxy.GraphQLMainServer.Delete.DeleteComment;
import reverseproxy.proxy.GraphQLMainServer.Delete.DeleteQuestion;

import java.util.List;

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
    @Autowired
    private Logout logout;
    @Autowired
    private CreateNewAccessToken createNewAccessToken;
    @Autowired
    private IsValidate isValidate;

    //region MainServer Create
    public Question createQuestion(String title, String author, List<String> tags, String content)  {
        // token 검사
        System.out.println("Request 값 : " + title+"\t"+author+"\t"+tags+"\t"+content);
        return createQuestion.createQuestion(title, author, tags, content);
    }

    public Answer createAnswer(String question_id, String author, String content) {
        // token 검사
        return createAnswer.createAnswer(question_id, author, content);
    }

    public Comment createComment(String question_id, String answer_id, String author, String content) {
        // token 검사
        return createComment.createComment(question_id, answer_id, author, content);
    }

    public Question createLike(String question_id, String answer_id, String nickname, String status)  {
        // token 검사
        return createLike.createLike(question_id, answer_id, nickname, status);
    }

    //endregion
    //region MainServer Delete
    public Question deleteQuestion(String _id){
        // token 검사
        return deleteQuestion.deleteQuestion(_id);
    }

    public Answer deleteAnswer(String question_id, String answer_id){
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
    public User loginToServer(String email, String password, DataFetchingEnvironment env) {
        return login.loginToServer(email, password, env);
    }

    public Count logoutFromServer(String email) { // 토큰 만료 시키기
        if (logout.logoutFromServer(email)) {
            return new Count(1); // 성공했다
        }
        return new Count(0); // 실패했다
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

    public User reissuanceAccessToken(String nickname, DataFetchingEnvironment env) {
        return createNewAccessToken.reissuanceAccessToken(nickname,env);
    }
    public Count isValidate(String nickname, DataFetchingEnvironment env) throws Exception {
        return isValidate.isValidate(nickname,env);
    }
}
