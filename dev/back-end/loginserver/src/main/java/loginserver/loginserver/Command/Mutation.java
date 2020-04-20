package loginserver.loginserver.Command;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import graphql.schema.DataFetchingEnvironment;
import loginserver.loginserver.Entity.Count;
import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Module.Check.CheckEmail;
import loginserver.loginserver.Module.Create.CreateDummyUser;
import loginserver.loginserver.Module.Create.CreateNewAccessToken;
import loginserver.loginserver.Module.Create.CreateUser;
import loginserver.loginserver.Module.Login;
import loginserver.loginserver.Module.ReissuanceAccessToken;
import loginserver.loginserver.Module.Update.UpdateUserAuthState;
import loginserver.loginserver.Module.Update.UpdateUserInfo;
import loginserver.loginserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Component
public class Mutation implements GraphQLMutationResolver {
    ExecutorService executorService = Executors.newFixedThreadPool(10);
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CreateUser createUser;
    @Autowired
    private UpdateUserAuthState updateUserAuthState;
    @Autowired
    private UpdateUserInfo updateUserInfo;
    @Autowired
    private Login login;
    @Autowired
    private CheckEmail checkEmail;

    //region member Mutation
    public User createUser(String email, String password, String nickname, String schoolName) {
        System.out.println(email);
        System.out.println(password);
        System.out.println(nickname);
        System.out.println(schoolName);
        return createUser.createUser(email, password, nickname, schoolName);
    }

    public User updateUserAuthState(String authState) {
        return updateUserAuthState.updateUserAuthState(authState);
    }

    public User updateUserInfo(String nickname, String gitLink){
        return updateUserInfo.updateUserInfo(nickname, gitLink);
    }

    public User loginToServer(String email, String password, String ip) {
        return login.login(email, password, ip);
    }

    public Count checkDuplicateNickname(String nickname) {// 중복은 0, 중복이 아닌 것은 1
        if (!userRepository.existsByNickname(nickname))
        {
            executorService.execute(new CreateDummyUser(null,nickname));
            return new Count("true");
        }
        return new Count("duplicated");
    }
    public Count checkEmail(String email, String nickname){
        if(!userRepository.existsByEmail(email)){
            String genkey = checkEmail.checkEmail(email,nickname);
            executorService.execute(new CreateDummyUser(email,null));
            return new Count(genkey);
        }
        return new Count("duplicated");
    }
    /*public User reissuanceAccessToken(String nickname, String refreshToken) {
        return reissuanceAccessToken.reissuanceAccessToken(nickname, refreshToken);
    }*/
    //endregion
}
