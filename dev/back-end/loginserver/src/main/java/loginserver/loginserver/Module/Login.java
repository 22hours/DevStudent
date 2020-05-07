package loginserver.loginserver.Module;

import loginserver.loginserver.Entity.User;
import loginserver.loginserver.Entity.UserInfo;
import loginserver.loginserver.Module.Create.CreateNewAccessToken;
import loginserver.loginserver.Module.Create.CreateNewRefreshToken;
import loginserver.loginserver.Repository.UserInfoRepository;
import loginserver.loginserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Login {
    @Autowired
    private RandMaker randMaker;
    @Autowired
    private UserInfoRepository userInfoRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CreateNewAccessToken createNewAccessToken;


    public User login(String email, String password, String ip) {
        if (!userRepository.existsByEmail(email)) {
            return new User();
        }
        User user = userRepository.findByEmail(email);
        if (!user.getPassword().equals(password)) {
            return new User();
        }
        if(!user.getAuthState().equals("Certificated"))
            return new User();
        UserInfo userInfo = userInfoRepository.findByEmail(email);
        String gitLink = userInfo.getGitLink();
        user.setGitLink(gitLink);
        user.setPassword(null);
        user.setAccessToken(createNewAccessToken.create(user.getNickname(), email, ip));
        return user;
    }
}