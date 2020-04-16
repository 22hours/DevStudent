package loginserver.loginserver.Module;

import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Module.Create.CreateNewAccessToken;
import loginserver.loginserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class ReissuanceAccessToken {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private VerifyRefreshToken verifyRefreshToken;
    @Autowired
    private CreateNewAccessToken createNewAccessToken;
    public User reissuanceAccessToken(String nickname, String refreshToken){
        String tokenState = "";
        if (!userRepository.existsByNickname(nickname)) {
            return new User(null, "Not exist nickname", "Reissue fail", "Reissue fail", "Reissue fail");
        }
        User user = userRepository.findByNickname(nickname);
        if(user.getEmail()!=null){
            tokenState = verifyRefreshToken.verifyRefreshToken(refreshToken, nickname, user.getEmail());
        }
        else{
            return new User(null, "Not Exist Email","Reissue fail","Reissue fail","Reissue fail");
        }
        if (!tokenState.equals("Safe")) {
            return new User(null, tokenState, "Reissue fail", "Reissue fail", "Reissue fail");
        }
        //String key = randMaker.getKey(false, 20);
        user.setAccessToken(createNewAccessToken.create(nickname, user.getEmail()));
        user.setPassword(null);
        user.setRefreshToken(null);
        return user;
    }
}