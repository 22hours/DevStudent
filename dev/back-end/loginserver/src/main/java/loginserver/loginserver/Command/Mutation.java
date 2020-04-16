package loginserver.loginserver.Command;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import graphql.schema.DataFetchingEnvironment;
import loginserver.loginserver.Entity.Count;
import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Module.Create.CreateNewAccessToken;
import loginserver.loginserver.Module.Create.CreateUser;
import loginserver.loginserver.Module.Login;
import loginserver.loginserver.Module.ReissuanceAccessToken;
import loginserver.loginserver.Module.Update.UpdateUserAuthState;
import loginserver.loginserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Mutation implements GraphQLMutationResolver {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CreateUser createUser;
    @Autowired
    private UpdateUserAuthState updateUserAuthState;
    @Autowired
    private Login login;

    @Autowired
    private ReissuanceAccessToken reissuanceAccessToken;

    //region member Mutation
    public User createUser(String email, String password, String nickname, String schoolName) {
        return createUser.createUser(email, password, nickname, schoolName);
    }

    public User updateUserAuthState(String authState) {
        return updateUserAuthState.updateUserAuthState(authState);
    }

    public User loginToServer(String email, String password) {
        return login.login(email, password);
    }

    public Count checkDuplicateEmail(String email) {
        if (!userRepository.existsByEmail(email))
            return new Count(1);
        return new Count(0);
    }

    public Count checkDuplicateNickname(String nickname) {
        if (!userRepository.existsByNickname(nickname))
            return new Count(1);
        return new Count(0);
    }
    public User reissuanceAccessToken(String nickname, String refreshToken) {
        return reissuanceAccessToken.reissuanceAccessToken(nickname, refreshToken);
    }
    //endregion
}
